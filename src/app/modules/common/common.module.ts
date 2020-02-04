import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ]
})
export class SelfCommonModule { }