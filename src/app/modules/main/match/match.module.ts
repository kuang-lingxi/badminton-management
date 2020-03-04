import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { SelfCommonModule } from '../../common/common.module';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { MatchModalComponent } from './components/match-modal/match-modal.component';
import { MatchService } from './service/match.service';


@NgModule({
  declarations: [MatchListComponent, MatchDetailComponent, MatchModalComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    SelfCommonModule
  ],
  providers: [
    MatchService
  ],
  entryComponents: [MatchModalComponent]
})
export class MatchModule { }
