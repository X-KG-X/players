import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  player : any;
  error: any;
  constructor(private _httpService: HttpService, private _router: Router) {
    this.player = {name: '', position: ''};
    this.error = '';
  }

  ngOnInit() {
  }

  add_player(){
    let obs = this._httpService.add_player( this.player);
    obs.subscribe(data => {
      console.log('***********back from add', data);
      if ( data['msg'] == 'failure') {
        this.error = data['info']['message']
      } else {
        this.player = { name: '', position: ''};
        this._router.navigate(['/players/list']);
      }
    });
  }

}
