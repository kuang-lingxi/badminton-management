import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewListComponent } from './components/review-list/review-list.component';


const routes: Routes = [
  {
    path: 'review',
    component: ReviewListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefereeRoutingModule { }
