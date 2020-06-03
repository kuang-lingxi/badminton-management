import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NoticeModalComponent } from '../notice-modal/notice-modal.component';
import { NoticeService } from '../../service/notice.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {

  validateForm: FormGroup;

  pageSize: number = 10;

  pageIndex: number = 1;

  total: number = 30;

  noticeInfo: any = {
    title: '这是标题', 
    content: '这是content', 
    top: 1
  }

  noticeData: any = [
    
  ]

  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService,
    private noticeService: NoticeService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null],
      rangePickerTime: [null]
    });
    this.update();
  }

  newNotice() {
    const modal = this.modalService.create({
      nzTitle: "发布通知",
      nzContent: NoticeModalComponent,
      nzWidth: 700,
      nzFooter: null
    })

    modal.afterClose.subscribe(resp => {
      if(resp) {
        this.update();
      }
    })
  }

  edit(title, content, top) {
    const modal = this.modalService.create({
      nzTitle: "编辑通知",
      nzContent: NoticeModalComponent,
      nzWidth: 700,
      nzFooter: null,
      nzComponentParams: {noticeInfo: {title, content, top}}
    })
  }

  pageIndexChange() {
    this.update();
  }
 
  pageSizeChange() {
    this.update();
  }

  update() {
    this.noticeService.getNotice(this.pageSize, this.pageIndex).subscribe(resp => {
      if(resp.code === 0) {
        this.total = resp.message.total;
        this.noticeData = resp.message.notice;
      }
    })
  }

}
