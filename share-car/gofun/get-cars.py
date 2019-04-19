import requests
import numpy as np
import json
from concurrent.futures import ThreadPoolExecutor

headers = {
        'Authorization': '',
        'AppType': 'TPOS',
        'Accept': 'application/json',
        'versionName': '3.2.2.1042',
        'referer': 'http://api.shouqiev.com',
        'os': 'Android',
        'Host': 'api.shouqiev.com',
        'User-Agent': 'okhttp/3.10.0',
    }


def get_parking_info(job):
    city_code, parking_id = job
    data = [
            ('parkingId', parking_id),
            ('cityCode', city_code),
            ('returnParkingId', parking_id),
            ('appVersion', '323'),
    ]

    resp = requests.post(
        'http://api.shouqiev.com/order/parkingConfirmPage.json', headers=headers, data=data, timeout=10).json()['modelData']['searchList']

    for car in resp:
        car_id = car['carId']
        car_list[car_id] = car
        print(car['plateNum'])

car_list = {}

executor = ThreadPoolExecutor(max_workers=50)
with open("parkings.json", "rt") as f:
    parkings = json.loads(f.read())    
    for id,parking in parkings.items():
        city_code = parking['cityCode']
        executor.submit(get_parking_info, (city_code, id))

executor.shutdown()

with open("car.json", "wt") as f:
    f.write(json.dumps(car_list, ensure_ascii=False))