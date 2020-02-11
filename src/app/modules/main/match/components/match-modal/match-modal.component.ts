import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-match-modal',
  templateUrl: './match-modal.component.html',
  styleUrls: ['./match-modal.component.scss']
})
export class MatchModalComponent implements OnInit {
  @Input()
  matchInfo: any;

  validateForm: FormGroup;

  showLimit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [this.matchInfo && this.matchInfo.name || undefined, [Validators.required]],
      introduce: [this.matchInfo && this.matchInfo.introduce || undefined, [Validators.required]],
      prize: [this.matchInfo && this.matchInfo.prize || undefined, [Validators.required]],
      address: [this.matchInfo && this.matchInfo.address, [Validators.required]],
      rangePickerTime: [this.matchInfo && [new Date(this.matchInfo.rangePickerTime[0]), new Date(this.matchInfo.rangePickerTime[1])], [Validators.required]],
      limit: [null, [Validators.required]],
      limitPeople: [this.matchInfo && [...this.matchInfo.limitPeople], [Validators.required]],
      referee: [this.matchInfo && this.matchInfo.referee, [Validators.required]],
      maxNum: [this.matchInfo && this.matchInfo.maxNum, [Validators.required]]
    });                                                                                                                                           

    if(this.matchInfo) {
      if(this.matchInfo !== 0) {
        this.showLimit = true;
      }
      this.validateForm.patchValue({'limit': this.matchInfo.limit});
    }
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    console.log(this.validateForm.value);
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  cancel() {
    this.modalRef.close();
  }

  selectChange(value) {
    if(parseInt(value) !== 0) {
      this.showLimit = true;
    }else {
      this.showLimit = false;
    }
  }
}
