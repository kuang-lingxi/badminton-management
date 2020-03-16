import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { AddressModalComponent } from '../address-modal/address-modal.component';
import { ResultModalComponent } from '../result-modal/result-modal.component';
import { OpponentModalComponent } from '../opponent-modal/opponent-modal.component';

@Component({
  selector: 'app-arrange-detail',
  templateUrl: './arrange-detail.component.html',
  styleUrls: ['./arrange-detail.component.scss']
})
export class ArrangeDetailComponent implements OnInit {

  arrange = [
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
    {id: 0, team1: '牛逼的队伍1', team2: '牛逼的队伍2', address: '5号场', result: '', referee: 'klx'},
  ]

  constructor(
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
  }

  address() {
    const modal = this.modalService.create({
      nzTitle: "修改比赛地址",
      nzContent: AddressModalComponent,
      nzWidth: 700,
      nzFooter: null,
    })
  }

  result() {
    const modal = this.modalService.create({
      nzTitle: "修改比赛结果",
      nzContent: ResultModalComponent,
      nzWidth: 700,
      nzFooter: null,
    })
  }

  opponent() {
    const modal = this.modalService.create({
      nzTitle: "修改比赛对手",
      nzContent: OpponentModalComponent,
      nzWidth: 700,
      nzFooter: null,
    })
  }

}
