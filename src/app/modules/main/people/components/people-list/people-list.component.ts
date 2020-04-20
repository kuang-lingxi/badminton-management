import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../../service/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  validateForm: FormGroup;

  peopleList: any = [
    
  ]

  pageIndex: number = 1;

  total: number = 500;

  pageSize: number = 10;

  peopleNum: number;

  refereeNum: number;

  memberNum: number;

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      level: [2],
      search: [""]
    });

    this.peopleService.getAllUser().subscribe(response => {
      if(response.code === 0) {
        this.peopleNum = response.message.total;
        this.refereeNum = response.message.refereeNum;
        this.memberNum = response.message.memberNum;
      }
    })

    this.peopleService.getPageUser(this.validateForm.value.level, this.validateForm.value.search, this.pageIndex, this.pageSize).subscribe(resp => {
      if(resp.code === 0) {
        console.log(resp.message);
        this.total = resp.message.total;
        this.peopleList = resp.message.userList;
      }
    })
  }

  pageIndexChange() {
    this.update();
  }

  pageSizeChange() {
    this.update();
  }

  update() {
    this.peopleService.getPageUser(this.validateForm.value.level, this.validateForm.value.search, this.pageIndex, this.pageSize).subscribe(resp => {
      if(resp.code === 0) {
        this.total = resp.message.total;
        this.peopleList = resp.message.userList;
      }
    })
  }

  level(grade) {
    if(grade < 100) {
      return "D";
    }else if(grade < 200) {
      return "C";
    }else if(grade < 300) {
      return "C+";
    }else if(grade < 400) {
      return "B";
    }else if(grade < 500) {
      return "B+";
    }else if(grade < 600) {
      return "A";
    }else {
      return "A+";
    }
  }

}
