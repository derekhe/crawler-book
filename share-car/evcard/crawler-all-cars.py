import requests
import gzip
import ujson
import pickle

headers = {
    'content-type': 'application/json; charset=UTF-8',
    'content-length': '46',
    'accept-encoding': 'gzip',
    'user-agent': 'okhttp/3.10.0',
}

def get_params():
    # 从sign.dump中读取签名
    with open('sign.dump', 'rb') as f:
        return pickle.load(f)

def get_available_shops():
    data = '{"vehicleModelSeq":""}'

    response = requests.post('https://apigw-mas.evcard.vip/evcard-mas/getShopRealInfoGzip', headers=headers, params=get_params(), data=data)

    # 解压原始信息
    origin_content = gzip.decompress(response.content).decode("utf-8")
    info = ujson.decode(origin_content)

    # 得到所有可用的停车场
    available_shops = list(map(lambda x: x[0], filter(lambda x: x[1] !='0', map(lambda x: x.split(':'), info['dataList']))))
    return available_shops

def get_car_info(shop_id):
    data = '{"canRent":1,"token":"","shopSeq":%s,"vehicleModelSeq":""}' % shop_id

    # 需要增加额外的参数
    params = get_params() + (('service', 'getVehicleInfoList'),)
    response = requests.post('https://mas.evcard.vip:8443/evcard-mas/evcardapp', headers=headers, params=params, data=data)
    print(response.json()['dataList'])

for shop_id in get_available_shops():
    get_car_info(shop_id)