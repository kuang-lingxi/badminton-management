import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FeedbackDetailComponent } from '../feedback-detail/feedback-detail.component';
import { FeedbackService } from '../../service/feedback.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {

  validateForm: FormGroup;

  pageSize: number = 10;

  pageIndex: number = 1;

  total: number = 10;

  feedbackList: any = [
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'},
    {id: 1, user: 'klx', title: 'title', time: 1580808088000, content: 'content'}
  ]

  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService,
    private feedbackService: FeedbackService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      keywords: [null],
      rangePickerTime: [null]
    });

    this.getList();
  }

  show(content: string) {
    const modal = this.modalService.create({
      nzTitle: "反馈详情",
      nzContent: FeedbackDetailComponent,
      nzWidth: 700,
      nzFooter: null,
      nzComponentParams: {content: content}
    })
  }

  confirm(id: number) {
    this.feedbackService.update(1, id).subscribe(resp => {
      if(resp) {
        this.message.success("已标记为解决！")
        this.getList();
      }
    })
  }

  getList() {
    this.feedbackService.list().subscribe(resp => {
      this.feedbackList = resp;
    })
  }

}
