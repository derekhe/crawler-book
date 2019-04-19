import glob
import os

import psycopg2

with psycopg2.connect(database='mobike', user='derekhe', password='', host='localhost') as cnx:
    with cnx.cursor() as cursor:
        path_to_data = "/media/derekhe/data/example/mobike/*"
        for dir in sorted(glob.glob(path_to_data)):
            # 目录名是以日期命名的
            day = os.path.basename(dir)

            # 按日期分表进行存储
            tablename = 'mobike_' + day

            # 先删除旧的表，然后创建新的表，防止重复数据
            cursor.execute("""DROP TABLE IF EXISTS %s""" % tablename)
            cursor.execute("""CREATE TABLE IF NOT EXISTS %s
                            (
                                crawl_date timestamp,
                                bike_id text,
                                lat double precision,
                                lng double precision
                            );""" % tablename)

            for file in sorted(glob.glob(dir + "/*")):
                print("Importing", file)
                # 使用COPY直接导入CSV文件
                cursor.execute("""COPY %s FROM '%s' WITH (FORMAT csv);""" % (tablename, file))

            # 建立以bike_id的索引
            cursor.execute("""CREATE INDEX %s_bike_id_index ON %s (bike_id);""" % (tablename, tablename))
