import concurrent.futures
import glob
import gzip

import ujson
import datetime

import os
import psycopg2


def connect():
    return psycopg2.connect(database='gofun', user='derekhe', password='', host='localhost', port='5432')


def get_table_name(file):
    # 从文件名中解析出日期
    return datetime.datetime.strptime(os.path.basename(file)[0:-8] + "+0800", "%Y%m%d-%H%M%S%z").strftime(
        "sharecar_%Y%m%d")


def create_table(file):
    # 创建分表
    with connect() as cnx:
        with cnx.cursor() as cursor:
            cursor.execute('''create table if not EXISTS %s
            (
                plate_num text not null,
                position point not null,
                battery smallint not null,
                brand text not null,
                series text not null,
                year text not null,
                name text not null,
                seats smallint not null,
                parking_name text not null,
                enmileage_integer integer not null,
                is_charging boolean not null,
                time timestamp with time zone not null
            )''' % get_table_name(file))


def import_file(file):
    try:
        with connect() as cnx:
            with gzip.open(file, 'rt') as f:
                print(file)

                crawl_date = datetime.datetime.strptime(
                    os.path.basename(file)[0:-8] + "+0800", "%Y%m%d-%H%M%S%z")
                text = f.read()
                parkings = ujson.loads(text)

                table_name = get_table_name(file)

                with cnx.cursor() as cursor:
                    for id in parkings.keys():
                        c = parkings[id]
                        cursor.execute(
                            'INSERT INTO ' + table_name +
                            ' (plate_num, position, battery, brand, series, year, name, seats, parking_name, enmileage_integer, is_charging, time) '
                            'VALUES (%s, POINT(%s, %s), %s, %s, %s, %s, %s, %s, %s, %s, %s, to_timestamp(%s))',
                            (
                                c['plateNum'], c['lon'], c['lat'], c['battery'], c['brand'], c['series'], c['year'],
                                c['name'], c['seats'][0], c['parkingName'], c['enmileageInteger'],
                                True if c['isCharging'] == 1 else False,
                                crawl_date.timestamp()))
    except Exception as ex:
        print(ex)


executor = concurrent.futures.ProcessPoolExecutor()

# 请修改路径
for file in sorted(glob.glob("/media/derekhe/storage/data/gofun/gofun/gofun-v3/*/**.json.gz")):
    create_table(file)
    executor.submit(import_file, file)

executor.shutdown()
