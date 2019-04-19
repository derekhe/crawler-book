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


def get_post_data(city_code, lat, lon):
    return [
        ('centerLat', lat),
        ('centerLon', lon),
        ('positionLat', lat),
        ('positionLon', lon),
        ('userPickCityCode', city_code),
    ]


def get_parking_list(city_code, lat, lon):
    data = get_post_data(city_code, lat, lon)
    resp = requests.post(
        'http://api.shouqiev.com/car/parkingNewListV3.json', headers=headers, data=data, timeout=10).json()

    parking_list = resp['modelData']['parkingMapVoList'][2]['parkingList']
    return parking_list


def get_city_info():
    print("Getting city info")
    resp = requests.post(
        'http://api.shouqiev.com/car/cityList.json', headers=headers, timeout=10).json()

    return resp['modelData']['cityList']

def run(city):
    print(city['cityName'])

    if 'minLat' in city:
        min_lat = city['minLat']
        max_lat = city['maxLat']
        min_lon = city['minLon']
        max_lon = city['maxLon']
    else:
        print("City region missing, use default offset")
        min_lat = city['lat'] - default_lat_diff
        max_lat = city['lat'] + default_lat_diff
        min_lon = city['lon'] - default_lon_diff
        max_lon = city['lon'] + default_lon_diff

    for lat in np.arange(min_lat, max_lat, offset):
        for lon in np.arange(min_lon, max_lon, offset):
            city_code = city['cityCode']
            print("Crawling", city_code, lat, lon)
            for parking in get_parking_list(city_code, lat, lon):
                id = parking['parkingId']
                parking_list[id] = parking
                print(parking['parkingName'])

parking_list = {}

# 大约2公里半径
offset = 0.08

# 某些城市没有提供经纬度的极限值，提供默认的区域大小
default_lat_diff = 0.5
default_lon_diff = 0.5

executor = ThreadPoolExecutor(max_workers=50)
for city in get_city_info():
    executor.submit(run, city)

executor.shutdown()

with open("parkings.json", "wt") as f:
    f.write(json.dumps(parking_list, ensure_ascii=False))