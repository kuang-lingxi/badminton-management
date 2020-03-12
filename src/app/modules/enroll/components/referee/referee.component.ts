import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EnrollService } from '../../service/enroll.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {

  validateForm: FormGroup;

  id: number;

  

  matchInfo: any;

  constructor(
    private fb: FormBuilder,
    private enrollService: EnrollService,
    private router: ActivatedRoute,
    private location: Location,
    private nzMessageService: NzMessageService,
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      schoolNumber: ["", Validators.required, [this.isExited, this.isForbid]]
    })
    this.id = parseInt(this.router.snapshot.queryParamMap.get("id"));
    const schoolNumber: string = this.router.snapshot.queryParamMap.get("schoolNumber");
    if(schoolNumber) {
      this.validateForm.patchValue({schoolNumber: schoolNumber})
    }
    this.enrollService.getMatch(this.id).subscribe(resp => {
      if(resp.code === 0) {
        this.matchInfo = resp.message.detail;
      }
    })
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

  submitForm() {
    this.enrollService.refereeMatch(this.id, this.validateForm.value.schoolNumber).subscribe(resp => {
      if(resp.code === 0) {
        if(resp.message.result) {
          this.nzMessageService.create("success", "报名成功！")
          this.goBack(true);
        }else {
          this.nzMessageService.create("error", "报名失败，请重试！");
        }
      }else {
        this.nzMessageService.create("error", "报名失败，请重试！");
      }
    });
  }

  goBack(delay, time = 1000) {
    if(delay) {
      setTimeout(() => {
        this.location.back();
      }, time);
    }else {
      this.location.back();
    }
  }

}
