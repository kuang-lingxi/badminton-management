import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../common/common.module';

import { EnrollRoutingModule } from './enroll-routing.module';
import { EnrollComponent } from './components/enroll/enroll.component';
import { EnrollService } from './service/enroll.service';
import { ApplicationComponent } from './components/application/application.component';
import { RefereeComponent } from './components/referee/referee.component';


@NgModule({
  declarations: [EnrollComponent, ApplicationComponent, RefereeComponent],
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
