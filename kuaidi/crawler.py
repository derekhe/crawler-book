import datetime
import hashlib
import logging
import os
import time
import ujson
from concurrent.futures import ThreadPoolExecutor

import arrow
import numpy as np
import requests
from shapely.geometry import Polygon, Point

from constants import cities
from modules.proxyprovider import SequenceProxyProvider

# 初始化日志模块
logger = logging.getLogger()
logger.setLevel(logging.INFO)

ch = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s:')
ch.setFormatter(formatter)
logger.addHandler(ch)


class Crawler:
    def __init__(self, ):
        self.reset()
        self.proxy_provider = SequenceProxyProvider(300)

    def reset(self):
        # 重新初始化
        self.all = {}
        self.start_time = datetime.datetime.now()
        self.total_loations_count = 0
        self.done_locations_count = 0

    def get_data(self, lng, lat, city):
        retry_count = 0
        while retry_count < 10:
            retry_count += 1
            proxy = self.proxy_provider.pick()
            try:
                self.proxy_provider.pick()

                headers = {
                    'host': 'api.kuaidihelp.com',
                    'pragma': 'no-cache',
                    'cache-control': 'no-cache',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    'User-Agent': 'okhttp/3.6.0',
                }

                query_data = self.build_request_body(lat, lng)

                resp = requests.post(
                    'http://api.kuaidihelp.com/v1/nearby/getlist', headers=headers, data=query_data, verify=False,
                    proxies={"http": proxy.url}, timeout=10)

                j = resp.json()

                for i in j['data']['result']:
                    self.all[i['mobile']] = i

                logging.info(j)

                # 计算爬取速度
                self.calc_speed(city)

                proxy.success()
                return
            except Exception as ex:
                proxy.connection_error()

    def build_request_body(self, lat, lng):
        app_key = '29b9b5abab071bddcdc68189098b52dd'
        app_id = '10012'

        md5 = hashlib.md5()
        current_time = str(int(time.time()))

        # 计算加密数据
        encrypt_data = current_time + app_key + "/v1/nearby/getlist" + app_id
        md5.update(encrypt_data.encode('utf-8'))
        sign = md5.hexdigest()

        data = '&data=%7B%22lng%22%3A%22{0}%22%2C%22lat%22%3A%22{1}%22%2C%22pr%22%3A6%2C%22type%22%3A%22{2}%22%2C%22limit%22%3A100%2C%22uid%22%3A%223941030%22%7D'.format(
            lng,
            lat, 'cm')

        return 'app_id=' + app_id + '&ts=' + current_time + '&sign=' + sign + data

    def calc_speed(self, city):
        # 计算爬取速度

        self.done_locations_count += 1
        timespent = datetime.datetime.now() - self.start_time
        percent = self.done_locations_count / self.total_loations_count
        total = timespent / percent
        logging.info(
            "{5} {0}% speed={1} total_got={4} total_time={2} remaing={3}".format(
                percent * 100,
                self.done_locations_count / timespent.total_seconds() * 60,
                total,
                total - timespent,
                len(self.all.keys()), city))

    def start(self):
        threads = 100

        for item in cities:
            city = item['city']
            area = Polygon(item['area'])
            bounds = area.bounds  # 得到包含边界的最小矩阵区域

            offset = 0.005  # 遍历的偏移量，越小越精确但速度越慢

            self.reset()

            logging.info("start crawling")
            with ThreadPoolExecutor(max_workers=threads) as executor:
                # 对最小矩阵区域中的每个点进行检查，点位于要爬取的多边形区域内则添加到队列中
                for lng in np.arange(bounds[0], bounds[2], offset):
                    for lat in np.arange(bounds[1], bounds[3], offset):
                        point = Point(lng, lat)
                        if area.contains(point):
                            self.total_loations_count += 1
                            executor.submit(self.get_data, lng, lat, city)

            self.dump_data(city)

    def dump_data(self, city):
        # 将数据存储到json文件中
        dirname = "./data/" + arrow.get().format("YYYY-MM-DD")
        os.makedirs(dirname, exist_ok=True)
        with open(dirname + "/{0}.json".format(city), "wt", encoding='utf-8') as f:
            f.write(ujson.dumps(self.all, indent=2, ensure_ascii=False))


Crawler().start()
