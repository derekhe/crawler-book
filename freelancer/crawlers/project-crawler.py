from basecrawler import Crawler

class ProjectCrawler(Crawler):
    def __init__(self):
        super().__init__()
        self.begin_id = 0
        self.end_id = 15971844
        self.NAME = "Project"

    def get_url(self, id):
        return 'https://www.freelancer.com/api/projects/0.1/projects/%s/?compact&full_description=true&upgrade_details=true&job_details=true&attachment_details=true&file_details=true&selected_bids=true&qualification_details=true&user_details=true&hireme_details=true&invited_freelancer_details=true&recommended_freelancer_details=true' % id

ProjectCrawler().start()