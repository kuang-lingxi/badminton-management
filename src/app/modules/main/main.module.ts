import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index/index.component';
import { SelfCommonModule } from '../common/common.module';
import { OverviewComponent } from './components/overview/overview.component';


@NgModule({
  declarations: [IndexComponent, OverviewComponent],
  imports: [
    CommonModule,
    SelfCommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
