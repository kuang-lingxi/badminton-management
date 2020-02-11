import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss']
})
export class FeedbackDetailComponent implements OnInit {

  constructor(
    private modalRef: NzModalRef
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.modalRef.close();
  }

}
