import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { GamesComponent } from './games/games.component';
import { ListComponent } from './list/list.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: 'players', component: PlayersComponent, children: [
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent}]
  },
  {path: 'games', component: GamesComponent, children: [
    {path: 'game1', component: Game1Component},
    {path: 'game2', component: Game2Component},
    {path: 'game3', component: Game3Component}
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/players/list' },
  { path: '**', component: PlayersComponent },
  // { path: 'games', pathMatch: 'full', redirectTo: '/games/game1'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
