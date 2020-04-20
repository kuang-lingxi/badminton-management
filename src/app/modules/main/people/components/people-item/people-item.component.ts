import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
