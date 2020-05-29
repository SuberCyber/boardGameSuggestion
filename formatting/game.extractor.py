import os, glob, re

folder_path = '../gameSource'

def formatting(field, file, includeComma=True):
    if field:
        field = field.group()
        file.write(field)
        if includeComma:
            file.write(',')

with open ('listOfGamesInfo.json', 'w') as listOfGamesInfo:
    listOfGamesInfo.write('[')
    for filename in glob.glob(os.path.join(folder_path, '*')):
        with open(filename, 'r', encoding = 'cp850') as f:
            text = f.read()
            if not ".txt" in filename and not ".sh" in filename:
                listOfGamesInfo.write('{')
                print(filename[14:])
                formatting(re.search(r"\"rankinfo\":\[.*?\]",text), listOfGamesInfo)
                formatting(re.search("\"playerage\":\"[0-9][0-9]?\"", text), listOfGamesInfo)
                formatting(re.search(r"\"averageweight\":[0-9]\.[0-9]*", text), listOfGamesInfo)
                 # could add community player recs
                formatting(re.search("\"minplayers\":\"[0-9][0-9]?\"", text), listOfGamesInfo)
                formatting(re.search("\"maxplayers\":\"[0-9][0-9]?\"",text), listOfGamesInfo)
                formatting(re.search("\"minplaytime\":\"[0-9][0-9]?[0-9]?\"", text), listOfGamesInfo)
                formatting(re.search("\"maxplaytime\":\"[0-9][0-9]?[0-9]?\"", text), listOfGamesInfo)
                formatting(re.search(r'"boardgamecategory":\[.*?\]', text), listOfGamesInfo)
                formatting(re.search(r'"boardgamemechanic":\[.*?\]', text), listOfGamesInfo)
                # TODO: fix description
                ## description was causing issues since it's more finicky than other regex, includes html code
                # formatting(re.search("\"description\":\".*?\"",text, False), listOfGamesInfo)
                formatting(re.search(r'"boardgamesubdomain":\[.*?\]', text), listOfGamesInfo)
                listOfGamesInfo.write('"name":"' +  filename[14:] + '"}')
                if "zombies" not in filename:
                    listOfGamesInfo.write(',')
    listOfGamesInfo.write(']')
