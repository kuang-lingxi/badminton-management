import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollComponent } from './components/enroll/enroll.component';


const routes: Routes = [
  {
    path: '',
    component:EnrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollRoutingModule { }
