import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SelfCommonModule } from '../common/common.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SelfCommonModule
  ]
})
export class MainModule { }
