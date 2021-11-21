import csv
import json


def csvtojson(csvFilePath, jsonFilePath):
    jsonArr = []

    with open(csvFilePath, encoding='utf-8-sig') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            row['Score'] = int(row['Score'].replace(" / 80", " ")) 
            total = 80
            row['total'] = 80 #เพิ่มตัวแปร total โดยให้ค่า = 80 
            print(row)
            jsonArr.append(row)

    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonString = json.dumps(jsonArr, indent=5)  # จัดรูปให้อยู่ในรูปJson
        jsonf.write(jsonString)


csvFilePath = 'csv2.csv'
jsonFilePath = 'NewPathcsv1.json'

csvtojson(csvFilePath, jsonFilePath)
