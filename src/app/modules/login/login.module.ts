import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SelfCommonModule } from '../common/common.module';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SelfCommonModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
