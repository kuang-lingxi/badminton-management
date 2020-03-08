import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollRoutingModule } from './enroll-routing.module';
import { EnrollComponent } from './components/enroll/enroll.component';


@NgModule({
  declarations: [EnrollComponent],
  imports: [
    CommonModule,
    EnrollRoutingModule
  ]
})
export class EnrollModule { }
