import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal'

@Component({
  selector: 'app-notice-modal',
  templateUrl: './notice-modal.component.html',
  styleUrls: ['./notice-modal.component.scss']
})
export class NoticeModalComponent implements OnInit {

  @Input()
  noticeInfo: any;

  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [this.noticeInfo && this.noticeInfo.title],
      content: [this.noticeInfo && this.noticeInfo.content],
      top: [0]
    });

    if(this.noticeInfo) {
      this.validateForm.patchValue({top: this.noticeInfo.top})
    }
  }

  cancel() {
    this.modalRef.close();
  }

  submitForm() {
    console.log(this.validateForm.value);
  }

}
