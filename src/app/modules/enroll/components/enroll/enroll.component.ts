import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EnrollService } from '../../service/enroll.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

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
     private location: Location
  ) { }

  ngOnInit() {
    // this.enrollService.getMatch()
    this.validateForm = this.fb.group({
      schoolNumber: ["", Validators.required]
    })
    this.id = parseInt(this.router.snapshot.paramMap.get("id"));
    this.schoolNumber = this.router.snapshot.queryParamMap.get("schoolNumber");
    this.enrollService.getMatch(this.id).subscribe(resp => {
      if(resp.code === 0) {
        if(!resp.message.detail.isTeamUp && this,this.schoolNumber !== null) {
          this.location.back();
        }else {
          this.matchInfo = resp.message.detail;
          this.validateForm.addControl("name", new FormControl("", Validators.required));
          for(let i = 0; i < this.matchInfo.teamUpLimit; i++) {
            this.validateForm.addControl(i+"", new FormControl("", Validators.required, [this.isExited, this.isForbid]))
            this.formList.push(i);
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
            this.location.back();
          }
        }
      })
    }else {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    
    // this.goBack();
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
    const state: any = this.location.getState();
    if(state.navigationId === 1) {
      // this.location.go("https://www.baidu.com/");
    }else {
      this.location.back();
    }
  }

}
