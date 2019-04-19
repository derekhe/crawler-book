import requests
import numpy as np
import json

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
    resp = requests.post(
        'http://api.shouqiev.com/car/cityList.json', headers=headers, timeout=10).json()

    return resp['modelData']['cityList']


def get_parking_info(city_code, parking_id):
    data = [
            ('parkingId', parking_id),
            ('cityCode', city_code),
            ('returnParkingId', parking_id),
            ('appVersion', '323'),
    ]

    resp = requests.post(
        'http://api.shouqiev.com/order/parkingConfirmPage.json', headers=headers, data=data, timeout=10).json()
    return resp['modelData']['searchList']


parking_list = {}
car_list = {}

# 0.3间隔很大，仅用于演示，实际值需要调整到0.1以下
offset = 0.3

# 某些城市没有提供经纬度的极限值，按照北京市的经纬度计算一个经纬度的范围
default_lat_diff = (40.95 - 39.5)/2
default_lon_diff = (116.9 - 115.61)/2

for city in get_city_info():
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
                
                for car in get_parking_info(city_code, id):
                    car_id = car['carId']
                    car_list[car_id] = car
                    print(car)

with open("car.json", "wt") as f:
    f.write(json.dumps({"parking": parking_list, "cars": car_list}, ensure_ascii=False))