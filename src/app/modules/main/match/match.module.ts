import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { SelfCommonModule } from '../../common/common.module';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';


@NgModule({
  declarations: [MatchListComponent, MatchDetailComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    SelfCommonModule
  ]
})
export class MatchModule { }
