import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';


@NgModule({
  declarations: [FeedbackListComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    SelfCommonModule
  ]
})
export class FeedbackModule { }
