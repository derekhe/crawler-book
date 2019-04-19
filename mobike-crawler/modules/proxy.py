class Proxy:
    def __init__(self, url):
        self._url = url
        self._used = 1
        self._success = 1
        pass

    @property
    def url(self):
        return self._url

    def used(self):
        self._used += 1

    def success(self):
        self._success += 1

    def error(self):
        self._success -= 1

    @property
    def score(self):
        # 分数根据正确率来计算
        return int(self._success * 1.0 / self._used * 100)
