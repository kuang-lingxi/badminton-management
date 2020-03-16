import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { ArrangeComponent } from './components/arrange/arrange.component';
import { ArrangeDetailComponent } from './components/arrange-detail/arrange-detail.component';


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
  },
  {
    path: 'arrange',
    component: ArrangeComponent
  },
  {
    path: 'arrange/:id',
    component: ArrangeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
