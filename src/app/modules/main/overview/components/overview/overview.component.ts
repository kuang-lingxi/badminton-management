import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  topMatch: any = [
    {id: 1, img: '', title: '3v3趣味赛', introduce: '趣味赛是用于娱乐的', author: 'klx', time: 1580808088000},
    {id: 2, img: '', title: '新生赛', introduce: '新生赛加快新生融入环境', author: 'klx', time: 1580808088000},
    {id: 3, img: '', title: '团体赛', introduce: '这是团体赛', author: 'klx', time: 1580808088000},
    {id: 4, img: '', title: '院级比赛', introduce: '校级比赛', author: 'klx', time: 1580808088000},
  ];

  dynamicList: any = [
    {id: 1, content: 'test1加入了赛事3v3趣味赛'},
    {id: 1, content: 'test2加入了赛事3v3趣味赛'},
    {id: 1, content: 'test3加入了赛事3v3趣味赛'},
    {id: 1, content: 'test4加入了赛事3v3趣味赛'},
    {id: 1, content: 'test5加入了赛事3v3趣味赛'},
    {id: 1, content: 'test6加入了赛事3v3趣味赛'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
