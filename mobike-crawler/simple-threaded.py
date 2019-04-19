import requests

# python自带的range不支持浮点数，所以导入numpy
import numpy as np 
from concurrent.futures import ThreadPoolExecutor

headers = {
        'Host': 'app.mobike.com',
        'User-Agent': 'okhttp/3.10.0',
}

# 偏移量，根据实际情况进行调整，值越小则精度越高，但效率更低
# 0.002 约等于316米
offset = 0.002

bikes = {}

# 爬取线程
def crawl(lng, lat):
    data = [
            ('longitude', lng),
            ('latitude', lat),
            ('client_id', 'android'),
            ('bikenum', 50),
            ('biketype', 0),
            ('scope', 500)
        ]

    resp = requests.post('https://app.mobike.com/api/nearby/v4/nearbyBikeInfo', headers=headers, data=data).json()

    for bike in resp['bike']:
        id, x, y = bike['distId'], bike['distX'], bike['distY']
        bikes[id]=(x,y)
    print("Bikes:", len(bikes))

# 生成一个5线程的线程池，方便控制爬取速度
executor = ThreadPoolExecutor(max_workers=5)
for lng in np.arange(121.484258, 121.500859, offset):
    for lat in np.arange(31.233277, 31.249362, offset):
        # 提交一个任务
        executor.submit(crawl, lng, lat)

# 等待任务完成
executor.shutdown()

with open("bike.csv", 'wt', encoding='utf-8') as f:
    for id, pos in bikes.items():
        f.write("%s,%s,%s\n" % (id, pos[0], pos[1]))