import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollComponent } from './components/enroll/enroll.component';
import { ApplicationComponent } from './components/application/application.component';
import { RefereeComponent } from './components/referee/referee.component';


const routes: Routes = [
  {
    path: 'referee',
    component: ApplicationComponent
  },
  {
    path: 'refereeMatch',
    component: RefereeComponent
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
