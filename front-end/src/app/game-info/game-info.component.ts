import { Component, OnInit, Input } from '@angular/core';
import { GameInfo } from '../game.interface';
import { faStarHalf, faStar, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
})
export class GameInfoComponent implements OnInit {

  @Input() game : GameInfo;
  halfStar = faStarHalf;
  star = faStar;
  users = faUsers;
  clock = faClock;
  averageTime: number;

  constructor() { }

  ngOnInit(): void {
    if (this.game.name === "barenpark" || this.game.name === "ticket-ride-marklin"){
      this.game.fancyTitle = this.game.fancyTitle.replace('�', '&auml;');
    } else if (this.game.name === "labyrinth-war-terror-2001"){
      this.game.fancyTitle = this.game.fancyTitle.replace('�', '&ndash;');
    } else if (this.game.name === "schrodingers-cats"){
      this.game.fancyTitle = this.game.fancyTitle.replace('�', '&ouml;');
    }
  }

  showHalf():boolean{
    this.averageTime = (parseInt(this.game.maxplaytime) + parseInt(this.game.minplaytime))/2;
 
    return Math.ceil(this.game.averageweight) === Math.round(this.game.averageweight);
  }

  displayTitle(): string {
    return this.game.fancyTitle;
  }

}
