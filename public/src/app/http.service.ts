import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}


  get_playess() {
    return this._http.get('/players');
  }

  add_player(num) {
    return this._http.post('/player', num );
  }
  
  update(id, num) {
    return this._http.put(`/player/${id}`, num );
  }

  delete(id) {
    return this._http.delete(`/player/${id}` );
  }


  // get_one_player(id) {
  //   return this._http.get(`/player/${id}`);
  // }
  // add_quote(id, num) {
  //   return this._http.post(`/player/${id}`, num);
  // }

}

