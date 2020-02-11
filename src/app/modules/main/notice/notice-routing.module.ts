import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeListComponent } from './components/notice-list/notice-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: NoticeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }
