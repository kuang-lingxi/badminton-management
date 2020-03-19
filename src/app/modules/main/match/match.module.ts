import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { SelfCommonModule } from '../../common/common.module';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { MatchModalComponent } from './components/match-modal/match-modal.component';
import { MatchService } from './service/match.service';
import { ArrangeComponent } from './components/arrange/arrange.component';
import { NextModalComponent } from './components/next-modal/next-modal.component';
import { ArrangeDetailComponent } from './components/arrange-detail/arrange-detail.component';
import { AddressModalComponent } from './components/address-modal/address-modal.component';
import { ResultModalComponent } from './components/result-modal/result-modal.component';
import { OpponentModalComponent } from './components/opponent-modal/opponent-modal.component';
import { PrizeModalComponent } from './components/prize-modal/prize-modal.component';
import { GeneratePrizeComponent } from './components/generate-prize/generate-prize.component';
import { NeedPrizeComponent } from './components/need-prize/need-prize.component';


@NgModule({
  declarations: [MatchListComponent, MatchDetailComponent, MatchModalComponent, ArrangeComponent, NextModalComponent, ArrangeDetailComponent, AddressModalComponent, ResultModalComponent, OpponentModalComponent, PrizeModalComponent, GeneratePrizeComponent, NeedPrizeComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    SelfCommonModule
  ],
  providers: [
    MatchService
  ],
  entryComponents: [MatchModalComponent, NextModalComponent, AddressModalComponent, ResultModalComponent, OpponentModalComponent, PrizeModalComponent]
})
export class MatchModule { }
