import json
import logging
import os
import time
from concurrent.futures import ThreadPoolExecutor
import threading


import redis
import requests
import urllib3

from modules.proxyprovider import SequenceProxyProvider

urllib3.disable_warnings()
logging.getLogger("requests").setLevel(logging.WARNING)


class Crawler:
    def __init__(self):
        self.proxy_provider = SequenceProxyProvider(30)
        self.stats = {"total": 0, "not_found": 0}  # 统计信息
        self.MAX_WORKERS = 500  # 根据实际情况进行调整
        self.redis = redis.Redis(decode_responses=True)
        self.lock = threading.Lock()

    def parse_result(self, id, result, stats):
        try:
            j = json.loads(result)
            if j["status"] == "success":
                is_valid = True
                self.save(id, result)
                with self.lock:
                    stats["total"] += 1
            elif (j['error_code'] == "RestExceptionCodes.NOT_FOUND") or (
                j['error_code'] == "RestExceptionCodes.UNKNOWN_ERROR"):
                is_valid = True
                with self.lock:
                    stats['not_found'] += 1
            else:
                print(result)
                is_valid = False
        except:
            is_valid = False

        return is_valid

    def get(self, job):
        id, stats = job

        retry_count = 0
        while retry_count < 5:
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
                                            timeout=30, verify=False)

                is_valid = self.parse_result(id, response.text, stats)

                elapsed = time.time() - self.start
                with self.lock:
                    print("Total got %s, not found: %s, elasped: %s, speed: %s"
                          % (stats["total"], stats["not_found"], elapsed, stats["total"] / elapsed * 60))

                if not is_valid:
                    proxy.error()
                else:
                    self.redis.sadd(self.NAME, id)
                    proxy.success()
                    return
            except Exception as ex:
                print("Retrying", id, ex)
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
        for id in range(self.begin_id, self.end_id):
            if str(id) in crawled:
                continue

            executor.submit(self.get, (id, self.stats))

            added_jobs += 1
            if added_jobs > segment_length:
                added_jobs = 0
                executor.shutdown()
                executor = ThreadPoolExecutor(max_workers=self.MAX_WORKERS)

        print("Done")

    def save(self, id, result):
        subdir = int(id / 100000)
        dirname = "./out/%s/%s" % (self.NAME, subdir)
        os.makedirs(dirname, exist_ok=True)

        filename = "%s/%s-%s.json" % (dirname, self.NAME, id)

        with open(filename, "w", encoding="utf-8") as data:
            data.write(result)
