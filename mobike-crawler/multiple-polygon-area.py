import requests

# python自带的range不支持浮点数，所以导入numpy
import numpy as np
from concurrent.futures import ThreadPoolExecutor
from modules.proxyprovider import SequenceProxyProvider
from shapely.geometry import Polygon, Point
from shapely.ops import cascaded_union

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
                                 proxies={'http': proxy.url}, timeout=10, verify=False
                                 ).json()

            for bike in data['bike']:
                id, x, y = bike['distId'], bike['distX'], bike['distY']
                bikes[id] = (x, y)
            print('Bikes:', len(bikes))
            proxy.success()  # 代理请求成功，加分并重试
            break
        except Exception as ex:
            print(ex)
            proxy.error()  # 代理请求失败，减分并重试


# 定义不同密度的区域
areas = [{'offset': 0.0008, 'area': Polygon([(114.071388, 22.566622), (114.104176, 22.567573), (114.104176, 22.535549),
                                             (114.086494, 22.534439), (114.081860, 22.529524), (114.073277, 22.529365)])},
         {'offset': 0.002, 'area': Polygon([(114.045982, 22.560598), (114.072075, 22.567573),
                                            (114.073277, 22.529841), (114.049416, 22.529683)])}]

# 被排除的区域
area_exclude = Polygon([(114.049158, 22.554257), (114.057140, 22.559964),
                        (114.063234, 22.559568), (114.067526, 22.555050), (114.067869, 22.549105)])

for area in areas:
    area_polygon = area['area']
    offset = area['offset']
    bounds = area_polygon.bounds

    executor = ThreadPoolExecutor(max_workers=50)
    for lng in np.arange(bounds[0], bounds[2], offset):
        for lat in np.arange(bounds[1], bounds[3], offset):
            point = Point(lng, lat)

            # 检测点是否在多边形区域中，并且不在被排除的区域中
            if area_polygon.contains(point) and not area_exclude.contains(point):
                executor.submit(crawl, (lng, lat))

    executor.shutdown()

with open('bike.csv', 'wt', encoding='utf-8') as f:
    for id, pos in bikes.items():
        f.write('%s,%s,%s\n' % (id, pos[0], pos[1]))
