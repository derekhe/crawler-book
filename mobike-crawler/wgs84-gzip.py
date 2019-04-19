import requests

# python自带的range不支持浮点数，所以导入numpy
import numpy as np
import coordTransform_utils
import gzip
from datetime import datetime

headers = {
    'Host': 'app.mobike.com',
    'User-Agent': 'okhttp/3.10.0',
}

# 偏移量，根据实际情况进行调整，值越小则精度越高，但效率更低
# 0.002 约等于316米
offset = 0.002

bikes = {}
for lng in np.arange(121.484258, 121.500859, offset):
    for lat in np.arange(31.233277, 31.249362, offset):
        data = [
            ('longitude', lng),
            ('latitude', lat)
        ]

        data = requests.post(
            'https://app.mobike.com/api/nearby/v4/nearbyBikeInfo', headers=headers, data=data).json()

        for bike in data['bike']:
            id, x, y = bike['distId'], bike['distX'], bike['distY']
            wgs84 = coordTransform_utils.gcj02_to_wgs84(x, y)
            # 记录时间，经度、纬度
            bikes[id] = (datetime.now().strftime(
                "%Y-%m-%d %H:%M:%S"), wgs84[0], wgs84[1])
        print("Bikes:", len(bikes))

# 按照年月日-时分秒形式存为压缩包
filename = datetime.now().strftime("%Y%m%d-%H%M%S") + ".csv.gz"
with gzip.open(open(filename, 'wb'), 'wt', compresslevel=9) as f:
    for id, data in bikes.items():
        f.write("%s,%s,%s,%s\n" % (data[0], id, data[1], data[2]))
