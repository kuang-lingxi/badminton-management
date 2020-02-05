import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'overview', 
        loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: 'match',
        loadChildren: () => import('./match/match.module').then(m => m.MatchModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
