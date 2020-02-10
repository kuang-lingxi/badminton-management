import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleItemComponent } from './components/people-item/people-item.component';


@NgModule({
  declarations: [PeopleListComponent, PeopleItemComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SelfCommonModule
  ]
})
export class PeopleModule { }
