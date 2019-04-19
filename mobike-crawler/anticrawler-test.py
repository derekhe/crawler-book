import requests

# python自带的range不支持浮点数，所以导入numpy
import numpy as np 
from concurrent.futures import ThreadPoolExecutor

headers = {
        'Host': 'app.mobike.com',
        'User-Agent': 'okhttp/3.10.0',
}

offset = 0.002

bikes = {}

# 爬取线程
def crawl(lng, lat):
    try:
        data = [
                ('longitude', lng),
                ('latitude', lat),
                ('client_id', 'android'),
                ('bikenum', 50),
                ('biketype', 0),
                ('scope', 500)
            ]

        data = requests.post('http://app.mobike.com/api/nearby/v4/nearbyBikeInfo', headers=headers, data=data).json()

        for bike in data['bike']:
            id, x, y = bike['distId'], bike['distX'], bike['distY']
            bikes[id]=(x,y)
        print("Bikes:", len(bikes))
    except Exception as ex:
        print(ex)

while True:
    executor = ThreadPoolExecutor(max_workers=50)
    for lng in np.arange(121.384258, 121.600859, offset):
        for lat in np.arange(31.133277, 31.349362, offset):
            # 提交一个任务
            executor.submit(crawl, lng, lat)

    # 等待任务完成
    executor.shutdown()