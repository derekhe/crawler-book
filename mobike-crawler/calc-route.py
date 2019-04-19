import requests
import csv
from pprint import pprint

# 在百度开发者工具申请你的KEY
key = '你的KEY'

with open("visual/assets/bike_movement.csv") as csvfile:
    reader = csv.reader(csvfile)
    next(reader) # 跳过文件头

    for row in reader:
        if float(row[5]) == 0:
            # 排除单车停留记录
            continue

        url = "http://api.map.baidu.com/direction/v2/riding?origin=%s,%s&destination=%s,%s&ak=%s" %(row[2], row[1], row[4], row[3], key)
        req = requests.get(url)

        for route in req.json()['result']['routes']:
            for step in route['steps']:
                pprint(step)