import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  topMatch: any = [
    {id: 1, img: '', title: '3v3趣味赛', introduce: '这是一条描述信息这是一条描述信息这是一条描述信息', author: 'klx', time: 1580808088000},
    {id: 2, img: '', title: '3v3趣味赛', introduce: '这是一条描述信息这是一条描述信息这是一条描述信息', author: 'klx', time: 1580808088000},
    {id: 3, img: '', title: '3v3趣味赛', introduce: '这是一条描述信息这是一条描述信息这是一条描述信息', author: 'klx', time: 1580808088000},
    {id: 4, img: '', title: '3v3趣味赛', introduce: '这是一条描述信息这是一条描述信息这是一条描述信息', author: 'klx', time: 1580808088000},
    {id: 5, img: '', title: '3v3趣味赛', introduce: '这是一条描述信息这是一条描述信息这是一条描述信息', author: 'klx', time: 1580808088000},
    {id: 6, img: '', title: '3v3趣味赛', introduce: '这是一条描述信息这是一条描述信息这是一条描述信息', author: 'klx', time: 1580808088000}
  ];

  dynamicList: any = [
    {id: 1, content: '这是动态'},
    {id: 1, content: '这是动态'},
    {id: 1, content: '这是动态'},
    {id: 1, content: '这是动态'},
    {id: 1, content: '这是动态'},
    {id: 1, content: '这是动态'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
