import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EnrollService } from '../../service/enroll.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  validateForm: FormGroup;

  matchInfo: any;

  id: number;

  schoolNumber: string;

  formList: number[] = [];

  constructor(
     private fb: FormBuilder,
     private enrollService: EnrollService,
     private router: ActivatedRoute,
     private location: Location,
     private nzMessageService: NzMessageService,
  ) { }

  ngOnInit() {
    // this.enrollService.getMatch()
    this.validateForm = this.fb.group({
      schoolNumber: ["", Validators.required, [this.isExited, this.isForbid]]
    })
    this.id = parseInt(this.router.snapshot.paramMap.get("id"));
    this.schoolNumber = this.router.snapshot.queryParamMap.get("schoolNumber");
    this.enrollService.getMatch(this.id).subscribe(resp => {
      if(resp.code === 0) {
        this.matchInfo = resp.message.detail;
        if(!resp.message.detail.isTeamUp && this.schoolNumber !== null) {
          this.validateForm.patchValue({schoolNumber: this.schoolNumber});
        }else {
          this.validateForm.addControl("name", new FormControl("", Validators.required));
          for(let i = 0; i < this.matchInfo.teamUpLimit; i++) {
            this.validateForm.addControl(i+"", new FormControl("", Validators.required, [this.isExited, this.isForbid]))
            this.formList.push(i);
          }
          if(this.schoolNumber) {
            this.validateForm.patchValue({'0': this.schoolNumber})
          }
        }
      }
    })
  }

  submitForm(): void {
    if(this.matchInfo.isTeamUp) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].clearAsyncValidators();
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      let formVal = [];
      for(let i of this.formList) {
        formVal.push(this.validateForm.value[i+""]);
      }
      this.enrollService.joinTeamMatch(this.matchInfo.id, this.validateForm.value.name, formVal.join("-")).subscribe(resp => {
        if(resp.code === 0) {
          if(resp.message.result) {
            this.goBack();
          }
        }
      })
    }else {
      if(this.validateForm.value.schoolNumber == "1234567892") {
        this.nzMessageService.create('error', '您被禁止参赛，请联系管理员解除!');

        return ;
      }

      if(this.validateForm.value.schoolNumber === "2000000006") {
        this.nzMessageService.create("error", "您不符合本次参赛要求");

        return ;
      }

      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].clearAsyncValidators();
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      this.enrollService.joinMatch(this.matchInfo.id, this.validateForm.value.schoolNumber).subscribe(resp => {
        if(resp.code === 0) {
          if(resp.message.result) {
            this.goBack();
          }
        }else {
          this.nzMessageService.create('error', '报名失败，请重试');
        }
      })
    }
  }

  isForbid = () => {
    return Observable.create(observe => {
      this.enrollService.getMatch(this.id).subscribe(resp => {
        if(resp.code === 0) {
          observe.next({});
          observe.complete();
        }
      })

    })
    
  }

  isExited = () => {
    return Observable.create(observe => {
      observe.next({});
      observe.complete();
    })
  }

  goBack() {
    this.nzMessageService.create("success", "报名成功!");
    setTimeout(() => {
      const state: any = this.location.getState();
      if(state.navigationId === 1) {
        this.location.back();
        // window.location.href = "http://localhost:4200"
      }else {
        this.location.back();
      }
    }, 1000);
  }

}
