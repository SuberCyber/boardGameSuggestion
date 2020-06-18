# boardGameSuggestion

## Purpose: 

## Steps
1. Get list of MathSoc Games and get list of links of the games -> completed
2. Download local copy of each website from boardgamegeek.com -> completed
3. Create a json representation of the data. Should include: name, rank, type, time, difficulty -> completed
    * Add description
    * Add link to play online
4. Make a webpage
5. Have it be possible to search
6. Improve documentation and automate steps


## Setup:
1. Go into gameSource and run the `./downLoadGames.sh` 
    * If it says that curl is having issues the issue is with the line endings. 
    * If you get a permissions error use chmod
2. Go into formatting and run `python  game.extractor.py`. After this you should have an up to date version of the games

3. Go into frontend and run `npm i`. This will install the neccessary node modules. 

4. You should now be able to run   `ng serve`