import { Component } from '@angular/core';
import games from '../../../formatting/listOfGamesInfo.json';
import { GameInfo } from './game.interface';
import {FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'front-end';
  gamesList: GameInfo[];
  fullList: GameInfo[];
  filter = new FormGroup({
    numPlayers: new FormControl(''),
    approxPlayTime: new FormControl(''),
  });

  ngOnInit(){
    this.gamesList = games;
    this.fullList = games;
  }

  temp(){
    console.log(this.gamesList);
    console.log(this.filter.value);
    console.log((parseInt(this.gamesList[0].maxplaytime) + parseInt(this.gamesList[0].minplaytime))/2)
  }

  temp2(game:any){
    console.log(game);
  }

  sortByTime(){
    this.gamesList.sort((a,b) => {
      return (parseInt(a.maxplaytime) + parseInt(a.minplaytime))/2 - ((parseInt(b.maxplaytime) + parseInt(b.minplaytime))/2)
    });
  }

  sortByWeight(){
    this.gamesList.sort((a,b) => {
      return a.averageweight - b.averageweight
    });
  }

  playableBy(num = 6){
    this.gamesList = this.fullList.filter(value => {
      return parseInt(value.minplayers) <= num && parseInt(value.maxplayers) >= num;
    })
  }
}
