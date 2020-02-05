import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ]
})
export class SelfCommonModule { }
