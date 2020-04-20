import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../service/people.service';

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

  uid: number;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private peopleServer: PeopleService
  ) { }

  ngOnInit() {

    this.uid = parseInt(this.activeRoute.snapshot.paramMap.get("id"));
    this.peopleServer.getUser(this.uid).subscribe(resp => {
      if(resp.code === 0) {
        this.userInfo = resp.message.detail;
        console.log(this.userInfo)
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
    })
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
