import requests

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

data = [
  ('centerLat', '30.606077189006392'),
  ('centerLon', '104.09663991843784'),
  ('positionLat', '30.549773'),
  ('positionLon', '104.042061'),
  ('userPickCityCode', '028'),
]

response = requests.post('https://api.shouqiev.com/car/parkingNewListV3.json', headers=headers, data=data)
print(response.json())