
import requests
import time
import hashlib

import ujson

# 演示如何计算这个请求的sign值
# https://api.kuaidihelp.com/v1/inform_user/get_topic_list?sign=4119cadac3a564f61f21f7889178a191&ts=1532419476&app_id=10012

m = hashlib.md5()
#t = str(int(time.time()))
t = "1532419476"
app_key = '29b9b5abab071bddcdc68189098b52dd'
app_id = '10012'

f = t+app_key+"/v1/inform_user/get_topic_list"+app_id

m.update(f.encode('utf-8'))
sign = m.hexdigest()

print(sign)