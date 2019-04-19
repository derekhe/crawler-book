import time
import ujson
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver


def press_refresh_button():
    # 模拟点击刷新按钮
    print("Press refresh button")
    driver.find_element_by_id('com.like.car:id/ib_loc').click()
    time.sleep(2)


def press_near_by_parkings():
    # 模拟点击附近停车场按钮
    print("Press near by parking button")
    driver.find_element_by_id(
        'com.like.car:id/ib_title_bar_near_point').click()
    time.sleep(1)


def get_near_by_parkings(i):
    # 得到第i个停车场的元素
    return driver.find_elements_by_id('com.like.car:id/tv_point_name')[i]


def get_parking_count():
    # 得到停车场的数量
    return len(driver.find_elements_by_id('com.like.car:id/tv_point_name'))


def is_empty():
    # 有时候会遇到请求过于频繁导致百度地图SDK返回错误值
    # 此时会弹出一个找不到任何车辆信息的窗口，需要做放错处理
    try:
        driver.find_element_by_id('com.like.car:id/tv_empty_text')
    except NoSuchElementException:
        return False
    return True


def is_crawled(i):
    # 判断是否已经爬取过以节约时间
    parking_name = get_near_by_parkings(i).text
    return parking_name in crawled


def move_to_pos(lng, lat):
    # 将经纬度信息存入pos.json中，然后按刷新按钮。
    # mitmdump会将百度SDK返回值修改成我们需要的经纬度信息。
    print("Moving to position", lng, lat)
    with open("./out/pos.json", "wt") as f:
        f.write(ujson.dumps({"x": lng, "y": lat}))
    press_refresh_button()


desired_caps = {
    'platformName': "Android",
    'platformVersion': "6.0.1",  # 根据你的手机版本进行修改
    'deviceName': "616fceb9",  # 根据adb devices的值进行修改
    'appPackage': "com.like.car",
    'appActivity': "com.like.car.ui.activity.SplashActivity",
    'automationName': "appium",
    'fullReset': False,
    'noReset': True,
    'newCommandTimeout': 6000,
    'dontStopAppOnReset': True
}


# 连接手机
print("Connecting to phone")
driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)

print("Waiting app startup")
# 等待启动完成
time.sleep(5)

# 首先按一下刷新按钮，这时候会请求位置信息
press_refresh_button()
time.sleep(2)

# 将mitmdump抓取下来停车场数据载入
with open("./out/parkings.json") as f:
    parkings = ujson.loads(f.read())['data']

# 存储已经爬过的停车场名字
crawled = set()

# 遍历所有有车的停车场
non_empty_parkings = list(filter(lambda p: p['car_cnt'] != 0, parkings))
for parking in non_empty_parkings:
    if parking['name'] in crawled:
        print("Skip crawled")
        continue

    move_to_pos(parking['lng'], parking['lat'])
    print("Get car info")

    try:
        press_near_by_parkings()
        if is_empty():
            print("Empty car list, skip")
            driver.back()
            continue

        # 在附近停车场界面按顺序爬取没有爬取过的停车场
        for i in range(0, get_parking_count()):
            if is_crawled(i):
                print("Skip crawled")
                continue

            elem = get_near_by_parkings(i)
            name = elem.text
            elem.click()
            crawled.add(name)  # 记录下已经抓去过的停车场名字
            print(name, len(crawled), len(non_empty_parkings))
            press_near_by_parkings()

        driver.back()
    except Exception as ex:
        # 进行容错处理，当出现问题时尝试点击后退键，可以解决大部分异常问题
        print(ex)
        print("Try again")
        driver.back()
