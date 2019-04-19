import requests
import time
import hashlib
import ujson

headers = {
    'host': 'api.kuaidihelp.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'User-Agent': 'okhttp/3.6.0',
}

m = hashlib.md5()
t = str(int(time.time()))

app_key = '29b9b5abab071bddcdc68189098b52dd'
app_id = '10012'

f = t+app_key+"/v1/nearby/getlist"+app_id

m.update(f.encode('utf-8'))
sign = m.hexdigest()

data = 'app_id=' + app_id+ '&ts=' + t + '&sign=' + sign + '&data=%7B%22pr%22%3A%226%22%2C%22uid%22%3A%221341649%22%2C%22type%22%3A%22cm%22%2C%22address%22%3A%22%E6%88%90%E9%83%BD%E5%B8%82%E6%A1%82%E6%BA%AA%E8%A1%97%E9%81%93%E5%A4%A9%E5%BA%9C%E5%A4%A7%E9%81%93%E4%B8%AD%E6%AE%B51282%E5%A4%A9%E5%BA%9C%E5%A4%A9%E5%BA%9C%E8%BD%AF%E4%BB%B6%E5%9B%ADE%E5%8C%BA%22%2C%22lng%22%3A%22104.0687%22%2C%22lat%22%3A%2230.540348%22%7D'

response = requests.post('http://api.kuaidihelp.com/v1/nearby/getlist', headers=headers, data=data)
print(response.json())