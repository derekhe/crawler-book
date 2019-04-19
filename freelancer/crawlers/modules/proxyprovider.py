import threading
import requests
from .proxy import Proxy
import json


class SequenceProxyProvider:
    def __init__(self, num_of_proxies=200):
        self.num_of_proxies = num_of_proxies
        self.lock = threading.RLock()
        self.get_list()
        self.index = 0

    def get_list(self):
        r = requests.get(
            "http://proxy-http.default.139.162.101.73.xip.io/proxy.json", timeout=10)
        proxies = json.loads(r.text)
        self._proxies = list(map(lambda p: Proxy(p), proxies))

    def pick(self):
        with self.lock:
            self._proxies.sort(key=lambda p: p.score,
                               reverse=True)  # 对代理根据分数进行倒序排序
            proxy = self._proxies[self.index]  # 顺序取一个proxy
            proxy.used()  # 标记proxy被用过一次

            # 计算index，取top-n个
            proxy_len = len(self._proxies)
            max = self.num_of_proxies if proxy_len > self.num_of_proxies else proxy_len
            self.index = (self.index + 1) % max

            return proxy


if __name__ == "__main__":
    provider = SequenceProxyProvider()
    proxy = provider.pick()
    print("Proxy url:", proxy.url)
    print("Report success")
    proxy.success()
    print("Current score", proxy.score)
    print("Report failure")
    proxy.error()
    print("Current score", proxy.score)
