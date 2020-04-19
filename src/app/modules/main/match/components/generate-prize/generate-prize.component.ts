import { Component, OnInit } from '@angular/core';
import { matchStatusEnum } from '../../data/match-status.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MatchModalComponent } from '../match-modal/match-modal.component';
import { MatchService } from '../../service/match.service';
import { ActivatedRoute } from '@angular/router';
import { PrizeModalComponent } from '../prize-modal/prize-modal.component';

interface ItemData {
  id: number;
  teamName: string;
  realName: string;
}

@Component({
  selector: 'app-generate-prize',
  templateUrl: './generate-prize.component.html',
  styleUrls: ['./generate-prize.component.scss']
})
export class GeneratePrizeComponent implements OnInit {
  validateForm: FormGroup;

  matchId: number;

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 !== 0));
        this.refreshStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 === 0));
        this.refreshStatus();
      }
    }
  ];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: ItemData[] = [];
  listOfAllData: ItemData[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  round: any;
  endType;
  isEnd = false;

  constructor(
    private fb: FormBuilder,
    private matchService: MatchService,
    private activeRouter: ActivatedRoute,
    private nzModal: NzModalService
  ) {

  }

  ngOnInit(): void {

    this.matchId = parseInt(this.activeRouter.snapshot.paramMap.get("id"));

    this.validateForm = this.fb.group({
      status: [1]
    })

    this.matchService.getRoundUser(this.matchId, 1).subscribe(resp => {
      if(resp.code === 0) {
        this.listOfAllData = resp.message.user;
      }
    })

    this.matchService.getRound(this.matchId).subscribe(resp => {
      if(resp.code === 0) {
        this.round = resp.message.round;
        this.endType = this.round[this.round.length-1].type;
      }
    })
  }

  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfAllData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  change(type) {
    if(type === this.endType) {
      this.isEnd = true;
    }else {
      this.isEnd = false;
    }
    this.matchService.getRoundUser(this.matchId, type).subscribe(resp => {
      if(resp.code === 0) {
        this.listOfAllData = resp.message.user;
      }
    })
  }

  prize() {
    console.log(this.mapOfCheckedId);
    const modal = this.nzModal.create({
      nzTitle: "赛事奖励",
      nzContent: PrizeModalComponent,
      nzWidth: 700,
      nzFooter: null,
      nzComponentParams: {'userId': this.mapOfCheckedId, 'matchId': this.matchId, 'isEnd': this.isEnd}
    })
  }
}
