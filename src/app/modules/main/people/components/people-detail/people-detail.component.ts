import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  @Input()
  userInfo: any;

  oldUserInfo: any;

  validateForm: FormGroup;

  forbidEdit: boolean = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userInfo = {
      name: 'klx',
      introduce: 'introduce',
      phone: '17801170810',
      member: 1,
      referee: 1,
      grade: 100,
      admin: 1
    }
    this.oldUserInfo = {
      ...this.userInfo
    }
    this.validateForm = this.fb.group({
      name: [this.userInfo.name, [Validators.required]],
      phone: [this.userInfo.phone],
      introduce: [this.userInfo.introduce],
      member:[this.userInfo.member],
      referee: [this.userInfo.referee],
      grade: [this.userInfo.grade],
      admin: [this.userInfo.admin]
    });
  }

  edit() {
    this.forbidEdit = false;
  }

  submitForm() {
    console.log(this.validateForm.value)
  }

  reset() {
    this.validateForm = this.fb.group({
      name: [this.userInfo.name, [Validators.required]],
      phone: [this.userInfo.phone],
      introduce: [this.userInfo.introduce],
      member:[this.userInfo.member],
      referee: [this.userInfo.referee],
      grade: [this.userInfo.grade],
      admin: [this.userInfo.admin]
    });
    this.forbidEdit = true;
  }

}
