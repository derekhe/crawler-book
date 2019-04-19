import glob
import csv
from coordTransform_utils import wgs84_to_bd09

for file in glob.glob("./visual/assets/*.csv"):
    if 'bd09' in file:
        continue

    with open(file, "rt") as csvfile:
        output = file.replace(".csv", ".bd09.csv")
        with open(output, "wt") as outputfile:
            reader = csv.reader(csvfile)
            for row in reader:
                lon, lat = wgs84_to_bd09(float(row[2]), float(row[3]))
                outputfile.write("%s,%s,%s,%s\n" % (row[0], row[1], lon, lat))