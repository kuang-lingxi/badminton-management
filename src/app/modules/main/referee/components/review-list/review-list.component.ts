import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ReviewDetailComponent } from '../review-detail/review-detail.component';
import { RefereeService } from '../../service/referee.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  validateForm: FormGroup;

  pageSize: number = 10;

  pageIndex: number = 1;

  total: number = 10;

  reviewList: any = [
  ]

  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService,
    private refereeService: RefereeService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null]
    });
    this.refereeService.getApplication(0).subscribe(resp => {
      if(resp.code === 0) {
        this.reviewList = resp.message.list;
      }
    })
  }

  showDetail(img) {
    const modal = this.modalService.create({
      nzTitle: "裁判证查看",
      nzContent: ReviewDetailComponent,
      // nzWidth: 700,
      nzFooter: null,
      nzComponentParams: {img: img}
    })
  }

}
