import asyncio

import datetime
import logging

from proxybroker import Broker
import redis

r = redis.Redis(host='localhost', encoding="utf-8", decode_responses=True)

expire_time_s = 60 * 60 * 24    #一天后过期

async def save(proxies):
    while True:
        proxy = await proxies.get()
        if proxy is None:
            break
        if "HTTP" not in proxy.types:
            continue
        if "High" == proxy.types["HTTP"]:
            print(proxy)
            row = '%s://%s:%d' % ("http", proxy.host, proxy.port)
            r.set(row, 0, ex=expire_time_s)

while True:
    proxies = asyncio.Queue()
    broker = Broker(proxies, timeout=2, max_tries=2, grab_timeout=3600)
    tasks = asyncio.gather(broker.find(types=['HTTP', 'HTTPS']),
                           save(proxies))
    loop = asyncio.get_event_loop()
    loop.run_until_complete(tasks)
