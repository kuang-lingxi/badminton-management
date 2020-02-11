import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { RefereeRoutingModule } from './referee-routing.module';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';


@NgModule({
  declarations: [ReviewListComponent, ReviewDetailComponent],
  imports: [
    CommonModule,
    RefereeRoutingModule,
    SelfCommonModule
  ],
  entryComponents: [ReviewDetailComponent]
})
export class RefereeModule { }
