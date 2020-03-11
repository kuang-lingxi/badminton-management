import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {

  @Input()
  img: string

  constructor(
    private modalRef: NzModalRef
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.modalRef.close();
  }

}
