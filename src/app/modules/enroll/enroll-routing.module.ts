import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollComponent } from './components/enroll/enroll.component';
import { ApplicationComponent } from './components/application/application.component';


const routes: Routes = [
  {
    path: 'referee',
    component: ApplicationComponent
  },
  {
    path: ':id',
    component: EnrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollRoutingModule { }
