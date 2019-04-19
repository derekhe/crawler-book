from basecrawler import Crawler

class UserInfoCrawler(Crawler):
    def __init__(self):
        super().__init__()
        self.begin_id = 20089999
        self.end_id = 28961556
        self.NAME = "UserInfo"

    def get_url(self, id):
        return 'https://www.freelancer.com/api/users/0.1/users/?compact&avatar=true&country_details=true&profile_description=true&display_info=true&jobs=true&balance_details=true&qualification_details=true&membership_details=true&badge_details=true&status=true&reputation=true&employer_reputation=true&reputation_extra=true&employer_reputation_extra=true&users[]=%s' % id

UserInfoCrawler().start()