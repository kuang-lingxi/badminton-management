import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-next-modal',
  templateUrl: './next-modal.component.html',
  styleUrls: ['./next-modal.component.scss']
})
export class NextModalComponent implements OnInit {

  @Input()
  matchId: number;

  validateForm: FormGroup;

  showTeam = false;

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: ["xxxxx"],
      nowNum: [30],
      way: [0],
      teamNum: [10]
    })
    this.validateForm.get("name").disable();
    this.validateForm.get("nowNum").disable();
  }

  selectChange(e) {
    if(e ===  1) {
      this.showTeam =  true;
    }else {
      this.showTeam = false;
    }
  }

  cancel(e) {
    e.preventDefault();
    this.modalRef.close(false);
  }

}
