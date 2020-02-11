import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NoticeModalComponent } from '../notice-modal/notice-modal.component';

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
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 1, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 1, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 0, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 0, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 0, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 0, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 0, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 0, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 0, publisher: 'klx'},
    {id: 0, title: '这是第一条通知', content: '这是通知的内容', time: 1580808088000, top: 0, publisher: 'klx'}
  ]

  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null],
      rangePickerTime: [null]
    });
  }

  newNotice() {
    const modal = this.modalService.create({
      nzTitle: "发布通知",
      nzContent: NoticeModalComponent,
      nzWidth: 700,
      nzFooter: null
    })
  }

  edit() {
    const modal = this.modalService.create({
      nzTitle: "编辑通知",
      nzContent: NoticeModalComponent,
      nzWidth: 700,
      nzFooter: null,
      nzComponentParams: {noticeInfo: this.noticeInfo}
    })
  }

}
