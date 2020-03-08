import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../common/common.module';

import { EnrollRoutingModule } from './enroll-routing.module';
import { EnrollComponent } from './components/enroll/enroll.component';
import { EnrollService } from './service/enroll.service';


@NgModule({
  declarations: [EnrollComponent],
  imports: [
    CommonModule,
    EnrollRoutingModule,
    SelfCommonModule
  ],
  providers: [
    EnrollService
  ]
})
export class EnrollModule { }
