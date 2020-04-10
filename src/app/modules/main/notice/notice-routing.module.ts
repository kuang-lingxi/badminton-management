import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeListComponent } from './components/notice-list/notice-list.component';
import { ImageComponent } from './components/image/image.component';


const routes: Routes = [
  {
    path: 'list',
    component: NoticeListComponent
  },
  {
    path: 'image',
    component: ImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }
