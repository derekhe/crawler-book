import requests
import gzip
import ujson

headers = {
    'content-type': 'application/json; charset=UTF-8',
    'content-length': '46',
    'accept-encoding': 'gzip',
    'user-agent': 'okhttp/3.10.0',
}

# 这些信息已经过去，需要根据抓包的信息更新这些值
params = (
    ('timestamp', '1528807757088'),
    ('sign', '2417924B6F4DAC7177D63BD436E71681'),
    ('random', 'Inz9w7'),
    ('token', ''),
    ('appkey', 'evcardapp'),
)

data = '{"updatedTime":"20100612163919372","token":""}'

response = requests.post('https://apigw-mas.evcard.vip/evcard-mas/v1/getShopBaseInfoGzipNew', headers=headers, params=params, data=data)

data = ujson.decode(gzip.decompress(response.content).decode("utf-8"))
print(len(data['dataList']))