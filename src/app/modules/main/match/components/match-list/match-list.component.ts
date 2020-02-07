import { Component, OnInit } from '@angular/core';
import { matchStatusEnum } from '../../data/match-status.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MatchModalComponent } from '../match-modal/match-modal.component';

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

  matchData: any = [
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 0, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 1, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 2, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 3, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 4, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 5, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 0, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 0, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 0, endTime: 1580808088000},
    {id: 1, name: '3v3趣味赛', introduce: '这是一段简介', people: 20, status: 0, endTime: 1580808088000}
  ]

  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService
  ) {
    
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      matchName: [null, [Validators.required]],
      status: [this.matchStatus.enrolling, [Validators.required]],
    });
  }

  submitForm(): void {
    const data = {
      ...this.validateForm.value
    }

    console.log(data);
  }

  formatMatchStatus(status) {
    switch(status) {
      case this.matchStatus.waitBegin: return "待开启";
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
      nzContent: MatchModalComponent
    })
  }
}
