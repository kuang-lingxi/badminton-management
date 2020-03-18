import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { MatchService } from '../../service/match.service';

@Component({
  selector: 'app-next-modal',
  templateUrl: './next-modal.component.html',
  styleUrls: ['./next-modal.component.scss']
})
export class NextModalComponent implements OnInit {

  @Input()
  matchId: number;

  @Input()
  nowNum: number;

  validateForm: FormGroup;

  showTeam = false;

  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private matchService: MatchService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null],
      nowNum: [this.nowNum],
      way: [0],
      teamNum: [10],
      roundName: [null, Validators.required]
    })
    this.validateForm.get("name").disable();
    this.validateForm.get("nowNum").disable();
    this.addField();
    this.matchService.getMatchById(this.matchId).subscribe(resp => {
      if(resp.code === 0) {
        const match = resp.message.detail;
        this.validateForm.patchValue({name: match.name});
      }
    })
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
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  submitForm() {
    let list = [];
    this.listOfControl.forEach(item => {
      list.push(this.validateForm.get(item.controlInstance).value);
    })
    this.matchService.auto(this.matchId, list.join("-"), this.validateForm.value.way, this.validateForm.value.roundName).subscribe(resp => {
      if(resp.code === 0) {
        if(resp.message.result) {
          this.nzMessageService.create("success", "自动编排成功！");
          this.modalRef.close("true");
        }else {
          this.nzMessageService.create("error", "自动编排失败！请重试");
        }
      }else {
        this.nzMessageService.create("error", "自动编排失败！请重试");
      }
    })
  }

}
