import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: any;
  constructor(private _httpService: HttpService){
    this.players = [];
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

  delete_player(id) {
    let obs = this._httpService.delete(id);
    obs.subscribe( data => {
      console.log('***********back from delete', data);
      this.get_all_player();
    });
  }

}
