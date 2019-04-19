import glob
import ujson
from dict_to_csv import transform


def to_csv(input, output):
    content = open(input, "rt", encoding='utf-8').read()
    # 将输入的信息进行清洗，去掉一些不需要的回车符号
    j = ujson.loads(content.replace("\\r", '').replace("\\n", ''))

    # 转换成csv格式的字符串
    transformed = transform(list(j.values()))
    with open(output, "wt", encoding='utf-8') as f:
        f.write(transformed)


for file in glob.glob("./data/**/*cm.json"):
    print(file)
    to_csv(file,  file.replace(".json", ".csv"))
