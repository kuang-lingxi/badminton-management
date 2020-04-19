import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { MatchService } from '../../service/match.service';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-prize-modal',
  templateUrl: './prize-modal.component.html',
  styleUrls: ['./prize-modal.component.scss']
})
export class PrizeModalComponent implements OnInit {

  @Input()
  userId: any;

  @Input()
  matchId: number;

  @Input()
  isEnd: boolean;

  userIdList = [];

  userDetailList: string[] = [];

  validateForm: FormGroup;

  prizeList: any;

  matchType = [
    {name: '男单', num: 1},
    {name: '女单', num: 1},
    {name: '男双', num: 2},
    {name: '女双', num: 2},
    {name: '混双', num: 2},
  ]

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private matchService: MatchService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.matchService.getPrize(this.matchId).subscribe(resp => {
      this.prizeList = resp;
    })

    this.validateForm = this.fb.group({
      prizeType: [null, [Validators.required]],
      prizeContent: [null, [Validators.required]],
      people: [null, [Validators.required]]
    });

    this.validateForm.get("prizeContent").disable()
    this.validateForm.get("people").disable();

    for(let uid in this.userId) {
      this.userIdList.push(parseInt(uid));
      this.matchService.getUserByUid(parseInt(uid)).subscribe(resp => {
        const message = resp.message.detail;
        const content = `姓名：${message.name}，学号：${message.schoolNumber}`;
        this.userDetailList.push(content);
        this.validateForm.patchValue({people: this.userDetailList.join("\n")})
      })
    }

  }

  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
    if(this.isEnd) {
      this.matchService.endPrize(this.matchId).subscribe(resp => {
        if(resp) {
          this.message.create("success", "奖励成功！");
          this.modalRef.close();
        }
      })
    }else {
      this.message.create("success", "奖励成功！");
      this.modalRef.close();
    }
    
    

  }

  change(e) {
    for(let item of this.prizeList) {
      if(item.id === e) {
        const content = `实物奖励:${item.content}\n积分奖励:${item.grade}`;
        this.validateForm.patchValue({prizeContent: content});
      }
    }
  }

}
