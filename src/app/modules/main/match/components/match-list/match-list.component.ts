import { Component, OnInit } from '@angular/core';
import { matchStatusEnum } from '../../data/match-status.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MatchModalComponent } from '../match-modal/match-modal.component';
import { MatchService } from '../../service/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
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
    private matchService: MatchService
  ) {
    
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      matchName: [""],
      status: [this.matchStatus.enrolling],
    });

    this.matchService.getMatchList(0, this.pageSize, this.pageIndex, "").subscribe(response => {
      if(response.code === 0) {
        this.total = response.message.total;
        this.matchData = response.message.matchList;
      }
    })
  }

  submitForm(): void {
    this.matchService.getMatchList(parseInt(this.validateForm.value.status), this.pageSize, this.pageIndex, this.validateForm.value.matchName).subscribe(response => {
      if(response.code === 0) {
        this.total = response.message.total;
        this.matchData = response.message.matchList;
      }
    })
  }

  clear(e) {
    e.preventDefault();
    this.validateForm.patchValue({matchName: ""});
    this.validateForm.patchValue({status:0});
    this.update();
  }

  formatMatchStatus(status) {
    switch(status) {
      case this.matchStatus.end: return "已结束";
      case this.matchStatus.enrolling: return "报名中";
      case this.matchStatus.enrollEnd: return "报名截止";
      case this.matchStatus.matching: return "比赛中";
      case this.matchStatus.numMax: return "人数已满";
      default: return "未知";
    }
  }

  newMatch() {
    const modal = this.modalService.create({
      nzTitle: "新增赛事",
      nzContent: MatchModalComponent,
      nzWidth: 700,
      nzFooter: null
    })
  }

  open(id) {
    this.matchService.getMatchById(id).subscribe(response => {
      if(response.code === 0) {
        const detail = response.message.detail;
        this.matchInfo = {
          ...detail,
          rangePickerTime: [parseInt(detail.begTime), parseInt(detail.endTime)],
          time: parseInt(detail.time),
          limitPeople: detail.limitPeople ? detail.limitPeople.split("-") : []
        }
        const modal = this.modalService.create({
          nzTitle: "修改赛事",
          nzContent: MatchModalComponent,
          nzWidth: 700,
          nzFooter: null,
          nzComponentParams: {'matchInfo': this.matchInfo}
        })
      }
    })
    
  }

  pageIndexChange() {
    this.update();
  }

  pageSizeChange() {
    this.update();
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
