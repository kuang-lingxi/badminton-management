import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index/index.component';
import { SelfCommonModule } from '../common/common.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SelfCommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
