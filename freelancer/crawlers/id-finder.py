import requests


def get(url_template, id):
    # 根据需要修改template
    url = url_template % id
    headers = {
        'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        'accept-encoding': "gzip, deflate",
        'accept-language': "en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,ja;q=0.2",
        'cache-control': "no-cache",
    }

    response = requests.request("GET", url, headers=headers,
                                timeout=5, verify=False).json()

    if response['status'] == "success":
        return response['result']['time_submitted']
    else:
        return None


# 起始时间和id
begin_id = 0
begin_time = 0

# 终止时间和id
end_id = 17320737
end_time = 1531106351

# 需要搜索的时间
time_to_search = 1483200000  # 2017年1月1日0点
project_url_template = "https://www.freelancer.com/api/projects/0.1/projects/%s/?compact&full_description=true&upgrade_details=true&job_details=true&attachment_details=true&file_details=true&selected_bids=true&qualification_details=true&user_details=true&hireme_details=true&invited_freelancer_details=true&recommended_freelancer_details=true"

while True:
    mid_id = int((begin_id + end_id) / 2)

    while True:
        mid_time = get(project_url_template, mid_id)
        if mid_time is None:
            mid_id += 10
        else:
            break

    if (time_to_search > mid_time) and (time_to_search < end_time):
        begin_time = mid_time
        begin_id = mid_id
    else:
        end_id = mid_id
        end_time = mid_time

    print(begin_id, mid_id, end_id)
    print(begin_time, mid_time, end_time)
    if end_time - begin_time < 60 * 60 * 24:
        break
