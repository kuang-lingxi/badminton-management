import { Component, OnInit } from '@angular/core';
import { matchStatusEnum } from '../../data/match-status.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MatchModalComponent } from '../match-modal/match-modal.component';
import { MatchService } from '../../service/match.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-need-prize',
  templateUrl: './need-prize.component.html',
  styleUrls: ['./need-prize.component.scss']
})
export class NeedPrizeComponent implements OnInit {
  validateForm: FormGroup;

  pageSize: number = 10;

  pageIndex: number = 1;

  total: number = 30;

  matchStatus: any = matchStatusEnum;

  matchInfo: any = {
    name: '3v3趣味赛',
    introduce: '这是介绍',
    prize: '这是奖励',
    address: '这是比赛地址',
    rangePickerTime: [1581061754633, 1581063754633],
    limit: "1",
    limitPeople:["0", "1", "2"],
    referee: 1,
    maxNum:1
  }

  matchData: any = [
    
  ]

  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService,
    private matchService: MatchService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      matchName: [""],
      status: [this.matchStatus.enrolling],
    });

    this.matchService.prizeList().subscribe(response => {
      if(response.code === 0) {
        this.matchData = response.message.prizeList;
      }
    })
  }

  open(id) {
    this.router.navigateByUrl(`/main/match/generate/${id}`);
  }

  update() {
    this.matchService.getMatchList(parseInt(this.validateForm.value.status), this.pageSize, this.pageIndex, this.validateForm.value.matchName).subscribe(response => {
      if(response.code === 0) {
        this.total = response.message.total;
        this.matchData = response.message.matchList;
      }
    })
  }

}
