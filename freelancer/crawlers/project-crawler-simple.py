import json
import logging
import math
import os
import time
from concurrent.futures import ThreadPoolExecutor

import requests
import urllib3

from modules.proxyprovider import SequenceProxyProvider

# 屏蔽requests的SSL告警
urllib3.disable_warnings()
logging.getLogger("requests").setLevel(logging.WARNING)

class ProjectCrawler:
    def __init__(self):
        self.proxy_provider = SequenceProxyProvider()
        self.stats = {"total": 0, "not_found": 0}  # 统计信息
        self.total = 14209647  # 最大的项目ID编号
        self.NAME = "Project"
        self.MAX_WORKERS = 200  # 根据实际情况进行调整

    def get_url(self, id):
        return 'https://www.freelancer.com/api/projects/0.1/projects/%s/?compact&full_description=true&upgrade_details=true&job_details=true&attachment_details=true&file_details=true&selected_bids=true&qualification_details=true&user_details=true&hireme_details=true&invited_freelancer_details=true&recommended_freelancer_details=true' % id

    def parse_result(self, id, result, stats):
        try:
            j = json.loads(result)
            if j["status"] == "success":
                # 成功后存储返回值及计数
                is_valid = True
                self.save(id, result)
                stats["total"] += 1
            elif j['error_code'] == "RestExceptionCodes.NOT_FOUND":
                # 没有找到
                is_valid = True
                stats['not_found'] += 1
            else:
                # 出错打印result的值以便进一步分析问题所在
                print(result)
                is_valid = False
        except:
            # 出错打印result的值以便进一步分析问题所在
            print(result)
            is_valid = False

        return is_valid

    def get(self, id, stats):
        retry_count = 0
        while retry_count < 10:
            proxy = self.proxy_provider.pick()

            try:
                url = self.get_url(id)

                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
                    'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                    'accept-encoding': "gzip, deflate",
                    'accept-language': "en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,ja;q=0.2",
                    'cache-control': "no-cache",
                }

                print("Crawling %s" % (id))

                response = requests.request("GET", url, headers=headers,
                                            proxies={"https": proxy.url},
                                            timeout=5, verify=False)

                is_valid = self.parse_result(id, response.text, stats)

                # 计算速度
                elapsed = time.time() - self.start
                print("Total got %s, not found: %s, elasped: %s, speed: %s"
                      % (stats["total"], stats["not_found"], elapsed, stats["total"] / elapsed * 60))

                if not is_valid:
                    # 如果出错则认为代理有问题，减分
                    proxy.error()
                else:
                    proxy.success()
                    return
            except:
                print("Retrying", id)
                proxy.error()

            retry_count += 1

    def start(self):
        self.start = time.time()

        # 由于需要爬取的数量太多，如果所有的项目都submit到ThreadPoolExecutor中，会造成内部队列过大而导致性能问题
        # 这里将大队列分为多个片段依次进行抓取
        segment_length = 100000

        crawled = self.redis.smembers(self.NAME)

        executor = ThreadPoolExecutor(max_workers=self.MAX_WORKERS)
        added_jobs = 0
        for id in range(0, self.total):
            if str(id) in crawled:
                continue

            executor.submit(self.get, id, self.stats)

            added_jobs += 1
            if added_jobs > segment_length:
                added_jobs = 0
                executor.shutdown()
                executor = ThreadPoolExecutor(max_workers=self.MAX_WORKERS)

        print("Done")

    def save(self, id, result):
        # 一个文件夹中存储一万个
        subdir = int(id / 10000)
        dirname = "./out/%s/%s" % (self.NAME, subdir)
        os.makedirs(dirname, exist_ok=True)

        filename = "%s/%s-%s.json" % (dirname, self.NAME, id)

        with open(filename, "w", encoding="utf-8") as data:
            data.write(result)


ProjectCrawler().start()