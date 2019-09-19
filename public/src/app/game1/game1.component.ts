import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  players: any;
  mood: any;
  constructor(private _httpService: HttpService) {
    this.players = [];
    this.mood = {game1: ''};
  }

  ngOnInit() {
    this.get_all_player();
  }
  get_all_player() {
    let obs = this._httpService.get_playess();
    obs.subscribe((data) => {
      console.log('***********back from get_player', data);
      this.players = data['info']
    })
  }

  playing(playa){
    this.mood.game1= 'Playing'
    let obs = this._httpService.update(playa._id, this.mood );
    obs.subscribe( data => {
      console.log('***********back from update', data);
      this.get_all_player()
    })
  }
    
    not_playing(playa){
      this.mood.game1= 'Not Playing'
      let obs = this._httpService.update(playa._id, this.mood );
      obs.subscribe( data => {
        console.log('***********back from update', data);
        this.get_all_player()
      })
  }

  undecided(playa){
    this.mood.game1= 'Undecided'
    let obs = this._httpService.update(playa._id, this.mood );
    obs.subscribe( data => {
      console.log('***********back from update', data);
      this.get_all_player()
    })
  }
}
