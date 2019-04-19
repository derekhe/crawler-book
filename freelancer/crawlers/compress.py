import glob
import os
import time

while True:
    for dir in glob.glob("./out/**/*"):
        zip_file = dir.replace("./out", "./zip") + ".zip"
        zip_dir = os.path.dirname(zip_file)
        os.makedirs(zip_dir, exist_ok=True)
        os.system("zip -umr9 %s %s" % (zip_file, dir))

    print("Wait for another hour")
    time.sleep(60 * 60)
