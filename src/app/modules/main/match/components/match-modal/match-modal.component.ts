import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

  listOfControl: Array<{ id: number; controlInstance: string }> = [];

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
      this.validateForm.get("prize").disable();
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
      this.addField();
    }

    this.matchService.getType().subscribe(response => {
      if(response.code === 0) {
        this.type = response.message.result;
      }
    })

  }

  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
    console.log(this.listOfControl);
    let prizeList = [];
    for(let i = 0, len = this.listOfControl.length; i < len; i++) {
      const item = this.listOfControl[i].controlInstance;
      let prize = this.validateForm.value[item + "prize"];
      let grade = this.validateForm.value[item + "grade"];
      let thing = this.validateForm.value[item + "thing"];
      prizeList.push(`${prize}：实物奖励（${thing}），积分奖励（${grade}分）`);
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
      id: this.matchInfo && this.matchInfo.id,
      signNum: 0,
      isPrize: 0,
      prize: prizeList.join("\n")
    }

    if(this.isUpdate) {
      this.matchService.updateMatch(reqMsg).subscribe(response => {
        if(response.message.result) {
          this.modalRef.close(true);
        }
      })
      
    }else {
      this.matchService.insertMatch(reqMsg).subscribe(response => {
        if(response.code === 0) {
          for(let i = 0, len = this.listOfControl.length; i < len; i++) {
            const item = this.listOfControl[i].controlInstance;
            let prize = this.validateForm.value[item + "prize"];
            let grade = this.validateForm.value[item + "grade"];
            let thing = this.validateForm.value[item + "thing"];
            this.matchService.insertPrize(parseInt(response.message.result), prize, thing, grade).subscribe(resp => {
              console.log(resp);
            })
          }
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

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(
      ""+this.listOfControl[index - 1].controlInstance + "prize",
      new FormControl(null, Validators.required)
    );
    this.validateForm.addControl(
      ""+this.listOfControl[index - 1].controlInstance + "grade",
      new FormControl(null, Validators.required)
    );
    this.validateForm.addControl(
      ""+this.listOfControl[index - 1].controlInstance + "thing",
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance + "grade");
      this.validateForm.removeControl(i.controlInstance + "prize");
      this.validateForm.removeControl(i.controlInstance + "thing");
    }
  }
}
