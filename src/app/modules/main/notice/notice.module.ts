import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeListComponent } from './components/notice-list/notice-list.component';
import { SelfCommonModule } from '../../common/common.module';
import { NoticeModalComponent } from './components/notice-modal/notice-modal.component';


@NgModule({
  declarations: [NoticeListComponent, NoticeModalComponent],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    SelfCommonModule
  ],
  entryComponents: [NoticeModalComponent]
})
export class NoticeModule { }
