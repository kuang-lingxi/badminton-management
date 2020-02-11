import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { FeedbackDetailComponent } from './components/feedback-detail/feedback-detail.component';


@NgModule({
  declarations: [FeedbackListComponent, FeedbackDetailComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    SelfCommonModule
  ],
  entryComponents: [FeedbackDetailComponent]
})
export class FeedbackModule { }
