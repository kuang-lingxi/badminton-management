import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { SelfCommonModule } from '../../common/common.module';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SelfCommonModule
  ]
})
export class OverviewModule { }
