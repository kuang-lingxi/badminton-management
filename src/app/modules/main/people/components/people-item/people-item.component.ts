import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../service/people.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.scss']
})
export class PeopleItemComponent implements OnInit {

  @Input()
  imgUrl: string;

  @Input()
  name: string;

  @Input()
  introduce: string;

  @Input()
  schoolNumber: string;

  @Input()
  level: string;

  @Input()
  referee: boolean;

  @Input()
  uid: number;

  constructor(
    private peopleService: PeopleService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
  }

  forbid() {
    this.peopleService.forbid(this.uid).subscribe(resp => {
      if(resp) {
        this.message.success("已禁止该用户登录!");
      }
    })
  }

  forbidMatch() {
    this.message.success("已经禁止该用户参赛!");
  }

  admin() {
    this.message.success("已经授权为管理员!");
  }

}
