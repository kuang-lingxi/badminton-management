import { Component, OnInit } from '@angular/core';
import { matchStatusEnum } from '../../data/match-status.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MatchModalComponent } from '../match-modal/match-modal.component';
import { MatchService } from '../../service/match.service';
import { NextModalComponent } from '../next-modal/next-modal.component';

@Component({
  selector: 'app-arrange',
  templateUrl: './arrange.component.html',
  styleUrls: ['./arrange.component.scss']
})
export class ArrangeComponent implements OnInit {
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

    this.matchService.getArrange().subscribe(resp => {
      this.matchData = resp;
    })
  }

  submitForm(): void {
    this.pageIndex = 1;
    this.pageSize = 10;
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

  nextModal(id: number, nowNum: number) {
    console.log(id);
    const modal = this.modalService.create({
      nzTitle: "开启下一轮",
      nzContent: NextModalComponent,
      nzWidth: 700,
      nzFooter: null,
      nzComponentParams: {matchId: id, nowNum: nowNum}
    })

    modal.afterClose.subscribe(resp => {
      if(resp) {
        this.update();
      }
    })
  }
}
