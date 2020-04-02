import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { ArrangeComponent } from './components/arrange/arrange.component';
import { ArrangeDetailComponent } from './components/arrange-detail/arrange-detail.component';
import { GeneratePrizeComponent } from './components/generate-prize/generate-prize.component';
import { NeedPrizeComponent } from './components/need-prize/need-prize.component';
import { TeamArrangeComponent } from './components/team-arrange/team-arrange.component';
import { ArrangeTeamDetailComponent } from './components/arrange-team-detail/arrange-team-detail.component';


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
  },
  {
    path: 'arrangeTeam/:id',
    component: ArrangeTeamDetailComponent
  },
  {
    path: 'generate/:id',
    component: GeneratePrizeComponent
  },
  {
    path: 'prizeList',
    component: NeedPrizeComponent
  },
  {
    path: 'teamArrange',
    component: TeamArrangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
