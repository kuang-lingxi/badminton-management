import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal'
import { NoticeService } from '../../service/notice.service';
import { CookieService } from 'ngx-cookie-service';
import { NzMessageService } from 'ng-zorro-antd';

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
    private modalRef: NzModalRef,
    private noticeService: NoticeService,
    private cookieService: CookieService,
    private message: NzMessageService
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

  cancel(e) {
    e.preventDefault();
    this.modalRef.close(false);
  }

  submitForm() {
    const title = this.validateForm.value.title;
    const content = this.validateForm.value.content;
    const top = this.validateForm.value.top;
    const time = new Date().getTime() + "";
    const promulgator = this.cookieService.get("username");
    this.noticeService.insertNotice(title, content, promulgator, top, time).subscribe(resp => {
      if(resp) {
        this.message.create("success", "发布成功！");
        this.modalRef.close(true);
      }
    });
  }

}
