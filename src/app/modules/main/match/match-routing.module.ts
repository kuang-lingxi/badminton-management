import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';


const routes: Routes = [
  {
    path: 'list',
    component: MatchListComponent,
    data: {
      breadcrumb: "list"
    }
  },
  {
    path: 'list/:id',
    component: MatchDetailComponent,
    data: {
      breadcrumb: "detail"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
