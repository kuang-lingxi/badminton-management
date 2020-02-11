import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { RefereeRoutingModule } from './referee-routing.module';
import { ReviewListComponent } from './components/review-list/review-list.component';


@NgModule({
  declarations: [ReviewListComponent],
  imports: [
    CommonModule,
    RefereeRoutingModule,
    SelfCommonModule
  ]
})
export class RefereeModule { }
