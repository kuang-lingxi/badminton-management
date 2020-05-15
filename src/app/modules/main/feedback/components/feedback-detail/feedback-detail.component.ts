import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss']
})
export class FeedbackDetailComponent implements OnInit {

  @Input()
  content: string;

  constructor(
    private modalRef: NzModalRef
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.modalRef.close();
  }

}
