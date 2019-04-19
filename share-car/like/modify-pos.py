import ujson

class SignCapture:
    def response(self, flow):
        if "loc.map.baidu.com" in flow.request.url:
            j = ujson.decode(flow.response.content)
            #根据需要修改位置
            j['content']['point']['x'] = "104.071756"
            j['content']['point']['y'] = "30.66129"
            flow.response.text = ujson.dumps(j)

addons = [
    SignCapture()
]