import ujson


class SignCapture:
    def response(self, flow):
        if "loc.map.baidu.com" in flow.request.url:
            j = ujson.decode(flow.response.content)
            # 从文件中读取到需要设置的位置
            with open("./out/pos.json", "rt") as f:
                pos = ujson.loads(f.read())
            j['content']['point']['x'] = pos['x']
            j['content']['point']['y'] = pos['y']

            # 修改返回值
            flow.response.text = ujson.dumps(j)


class DumpParkingInfo:
    def response(self, flow):
        # 存储刷新后的停车场信息
        if "branch/list" in flow.request.url:
            with open("./out/parkings.json", "wt") as f:
                f.write(flow.response.text)


class DumpCarInfo:
    def response(self, flow):
        # 根据停车场的id编号存储车辆的信息
        if "car/list" in flow.request.url:
            params = {}
            for a, b in flow.request.urlencoded_form.items(multi=True):
                params[a] = b

            id = params['begin_branch_id']
            with open("./out/" + id + ".json", "wt") as f:
                f.write(flow.response.text)


addons = [
    SignCapture(),
    DumpParkingInfo(),
    DumpCarInfo()
]
