import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { MatchService } from '../../service/match.service';

@Component({
  selector: 'app-match-modal',
  templateUrl: './match-modal.component.html',
  styleUrls: ['./match-modal.component.scss']
})
export class MatchModalComponent implements OnInit {
  @Input()
  matchInfo: any;

  validateForm: FormGroup;

  showLimit: boolean = false;

  type: any = [];

  showTeamUpLimit: boolean = false;

  isUpdate = false;

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [this.matchInfo && this.matchInfo.name || undefined, [Validators.required]],
      introduce: [this.matchInfo && this.matchInfo.introduce || undefined, [Validators.required]],
      prize: [this.matchInfo && this.matchInfo.prize || undefined, [Validators.required]],
      address: [this.matchInfo && this.matchInfo.address, [Validators.required]],
      rangePickerTime: [this.matchInfo && [new Date(this.matchInfo.rangePickerTime[0]), new Date(this.matchInfo.rangePickerTime[1])], [Validators.required]],
      limit: [null, [Validators.required]],
      limitPeople: [this.matchInfo && [...this.matchInfo.limitPeople], [Validators.required]],
      referee: [this.matchInfo && this.matchInfo.referee, [Validators.required]],
      player: [this.matchInfo && this.matchInfo.player, [Validators.required]],
      time: [this.matchInfo && new Date(this.matchInfo.time), [Validators.required]],
      isTeamUp: [null, [Validators.required]],
      teamUpLimit: [this.matchInfo && this.matchInfo.teamUpLimit]
    });                                                                                                                                           

    if(this.matchInfo) {
      this.isUpdate = true;
      if(this.matchInfo.limit !== 0) {
        this.showLimit = true;
      }
      if(this.matchInfo.teamUpLimit !== 0) {
        this.showTeamUpLimit = true;
      }
      this.validateForm.patchValue({'limit': this.matchInfo.limit});
      this.validateForm.patchValue({'isTeamUp': this.matchInfo.isTeamUp});
    }else {
      this.validateForm.patchValue({'limit': 0});
      this.validateForm.patchValue({'isTeamUp': 0});
    }

    this.matchService.getType().subscribe(response => {
      if(response.code === 0) {
        this.type = response.message.result;
      }
    })
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let reqMsg = {
      ...this.validateForm.value,
      actualPlayer: 0,
      actualReferee: 0,
      hintCount: 0,
      begTime: this.validateForm.value.rangePickerTime[0].getTime(),
      endTime: this.validateForm.value.rangePickerTime[1].getTime(),
      limitPeople: this.validateForm.value.limitPeople ? this.validateForm.value.limitPeople.join("-") : null,
      time: this.validateForm.value.time.getTime(),
      status: 0,
      enterId: null,
      id: this.matchInfo && this.matchInfo.id
    }

    if(this.isUpdate) {
      this.matchService.updateMatch(reqMsg).subscribe(response => {
        if(response.message.result) {
          this.modalRef.close(true);
        }
      })
    }else {
      this.matchService.insertMatch(reqMsg).subscribe(response => {
        if(response.message.result) {
          this.modalRef.close(true);
        }
      })
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  cancel(e) {
    e.preventDefault();
    this.modalRef.close(false);
  }

  selectChange(value) {
    if(value !== 0) {
      this.showLimit = true;
    }else {
      this.showLimit = false;
    }
  }

  teamUpChange(value) {
    if(value !== 0) {
      this.showTeamUpLimit = true;
    }else {
      this.showTeamUpLimit = false;
    }
  }
}
