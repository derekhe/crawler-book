import requests

# python自带的range不支持浮点数，所以导入numpy
import numpy as np
from concurrent.futures import ThreadPoolExecutor
from modules.proxyprovider import SequenceProxyProvider
from shapely.geometry import Polygon, Point

proxyProvider = SequenceProxyProvider()

headers = {
    'Host': 'app.mobike.com',
    'User-Agent': 'okhttp/3.10.0',
}

offset = 0.0008

bikes = {}


def crawl(job):
    # 爬取线程
    lng, lat = job
    data = [
        ('longitude', lng),
        ('latitude', lat),
        ('client_id', 'android'),
        ('bikenum', 50),
        ('biketype', 0),
        ('scope', 500)
    ]

    retry = 0  # 错误重试次数
    while(retry < 10):
        retry += 1
        try:
            proxy = proxyProvider.pick()  # 提取一个proxy
            data = requests.post('http://app.mobike.com/api/nearby/v4/nearbyBikeInfo', headers=headers, data=data,
                                 # 指定proxy的url，超时时间10秒钟
                                 proxies={"http": proxy.url}, timeout=10, verify=False
                                 ).json()

            for bike in data['bike']:
                id, x, y = bike['distId'], bike['distX'], bike['distY']
                bikes[id] = (x, y)
            print("Bikes:", len(bikes))
            proxy.success()  # 代理请求成功，加分并重试
            break
        except Exception as ex:
            print(ex)
            proxy.error()  # 代理请求失败，减分并重试


# 初始化区域
area = Polygon([(121.483212, 31.241939), (121.488276, 31.243627), (121.491451, 31.242526),
                (121.492395, 31.233573), (121.487074, 31.231005), (121.484413, 31.237977)])

# 得到区域的最大矩形边界
bounds = area.bounds
executor = ThreadPoolExecutor(max_workers=50)

for lng in np.arange(bounds[0], bounds[2], offset):
    for lat in np.arange(bounds[1], bounds[3], offset):
        point = Point(lng, lat)

        # 检测点是否在多边形区域中
        if area.contains(point):
            executor.submit(crawl, (lng, lat))

executor.shutdown()

with open("bike.csv", 'wt', encoding='utf-8') as f:
    for id, pos in bikes.items():
        f.write("%s,%s,%s\n" % (id, pos[0], pos[1]))
