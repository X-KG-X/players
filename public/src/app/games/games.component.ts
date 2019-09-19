import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  game: any;
  constructor(private _httpService: HttpService){
    this.game = 1;
  }

  ngOnInit() {
  }

  game_check1() {
    this.game = 1 ;
  }

  game_check2() {
    this.game = 2 ;
  }
  game_check3() {
    this.game = 3 ;
  }
}
