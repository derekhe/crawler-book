from basecrawler import Crawler

class UserReviewCrawler(Crawler):
    def __init__(self):
        super().__init__()
        self.begin_id = 0
        self.end_id = 28961556
        self.NAME = "UserReview"

    def get_url(self, id):
        return 'https://www.freelancer.com/api/projects/0.1/reviews/?compact=true&to_users[]=%s&user_details=true' % id

UserReviewCrawler().start()