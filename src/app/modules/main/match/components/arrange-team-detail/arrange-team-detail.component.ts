import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { AddressModalComponent } from '../address-modal/address-modal.component';
import { ResultModalComponent } from '../result-modal/result-modal.component';
import { OpponentModalComponent } from '../opponent-modal/opponent-modal.component';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../../service/match.service';
@Component({
  selector: 'app-arrange-team-detail',
  templateUrl: './arrange-team-detail.component.html',
  styleUrls: ['./arrange-team-detail.component.scss']
})
export class ArrangeTeamDetailComponent implements OnInit {

  id: number;

  arrange;

  constructor(
    private modalService: NzModalService,
    private activeRoute: ActivatedRoute,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get("id"));
    this.matchService.getTeamConfrontation(this.id).subscribe(resp => {
      if(resp.code === 0) {
        this.arrange = resp.message.result;
      }
    })
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
