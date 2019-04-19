import requests
import gzip
import ujson

headers = {
    'content-type': 'application/json; charset=UTF-8',
    'content-length': '46',
    'accept-encoding': 'gzip',
    'user-agent': 'okhttp/3.10.0',
}

# 这些信息已经过时，需要根据抓包的信息更新这些值
params = (
    ('timestamp', '1528793135495'),
    ('sign', '6E16AD5C18DC7765FE8AA95DBF475E7A'),
    ('random', 'wVi918'),
    ('token', ''),
    ('appkey', 'evcardapp'),
)

data = '{"updatedTime":"20180612163919372","token":""}'

response = requests.post('https://apigw-mas.evcard.vip/evcard-mas/v1/getShopBaseInfoGzipNew', headers=headers, params=params, data=data)

print(ujson.decode(gzip.decompress(response.content).decode("utf-8")))