import concurrent.futures
import datetime
import glob
import ujson as json
from zipfile import ZipFile

from elasticsearch import Elasticsearch
from elasticsearch import helpers


def read_to_json(file):
    # 将文件转换成json对象
    project_json_file = ''.join(
        map(lambda b: b.decode("utf-8"), file.readlines()))
    return json.loads(project_json_file)


def import_to_db(index_name, zip_file_path, content_parser):
    try:
        es = Elasticsearch()
        print(zip_file_path)

        # 读取zip文件
        with ZipFile(zip_file_path) as myzip:
            # 得到zip文件中的文件列表
            files_in_zip = myzip.namelist()

            # 缓存文件内容以便后续批量插入
            bulk_cache = []
            for zip_file_name in files_in_zip:
                try:
                    if not ".json" in zip_file_name:
                        continue

                    with myzip.open(zip_file_name) as file_in_zip:
                        # 通过文件名解析id
                        id = zip_file_name.split(
                            "/")[-1].split("-")[1].replace(".json", "")

                        # 构建插入的内容
                        db_obj = {
                            '_index': index_name,
                            '_type': index_name,
                            '_id': id,
                            index_name: content_parser(file_in_zip, id)
                        }

                        # 将数据先存到缓存中然后再发送到ElasticSearch速度会更快
                        bulk_cache.append(db_obj)

                        if len(bulk_cache) == 500:
                            helpers.bulk(es, bulk_cache, request_timeout=600)
                            bulk_cache = []
                except Exception as ex:
                    print(zip_file_name, ex)

            helpers.bulk(es, bulk_cache, request_timeout=600)
            print("Imported: " + str(len(files_in_zip)))
    except Exception as ex:
        print(zip_file_path, ex)


def project_bids_parse(file_in_zip, id):
    return read_to_json(file_in_zip)['result']


def user_parser(file_in_zip, id):
    return read_to_json(file_in_zip)['result']['users'][id]


def userreview_parser(file_in_zip, id):
    return read_to_json(file_in_zip)['result']['reviews']


esInit = Elasticsearch(timeout=60, max_retries=100, retry_on_timeout=True)

# 为不同的数据定义json文件中有效的字段及字段mapping关系
tasks = [
    {"name": "Project",
     "content_parser": project_bids_parse,
     "mapping": "project-mapping.json"},
    {"name": "Bids",
     "content_parser": project_bids_parse,
     "mapping": "bids-mapping.json"},
    {"name": "User",
     "content_parser": user_parser,
     "mapping": "user-mapping.json"},
    {"name": "UserReview",
     "content_parser": userreview_parser,
     "mapping": "userreview-mapping.json"}
]

# 请修改路径
base_path = "/media/derekhe/storage/data/freelancer"
for task in tasks:
    index_name = task['name'].lower()
    try:
        # 删除之前导入的脏数据
        esInit.indices.delete(index_name)
    except:
        pass

    # 读取mapping文件
    mapping = ''.join(open(task['mapping'], "r", encoding="UTF-8").readlines())

    esInit.indices.create(index_name, body=json.loads(mapping))

    # 使用多进程而不是多线程
    executor = concurrent.futures.ProcessPoolExecutor()
    for zip_file in sorted(glob.glob(base_path + '/' + task['name'] + '/*.zip')):
        executor.submit(import_to_db, index_name,
                                       zip_file, task['content_parser'])

    executor.shutdown()
