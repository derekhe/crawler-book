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

with open('sign.dump', 'rb') as f:
    params = pickle.load(f)

# 修改时间到EVCard诞生前
data = '{"updatedTime":"20100612163919372","token":""}'

response = requests.post('https://apigw-mas.evcard.vip/evcard-mas/v1/getShopBaseInfoGzipNew', headers=headers, params=params, data=data)

with open('getShopBaseInfo.json', 'wt', encoding='utf-8') as f:    
    # 解压Gzip内容
    origin_content = gzip.decompress(response.content).decode("utf-8")
    f.write(ujson.dumps(ujson.decode(origin_content), ensure_ascii=False, indent=4))