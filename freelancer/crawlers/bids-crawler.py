from basecrawler import Crawler


class BidsCrawler(Crawler):
    def __init__(self):
        super().__init__()
        self.begin_id = 0
        self.end_id = 15971844
        self.NAME = "Bids"

    def get_url(self, id):
        return 'https://www.freelancer.com/api/projects/0.1/projects/%s/bids/?compact=true' % id


BidsCrawler().start()
