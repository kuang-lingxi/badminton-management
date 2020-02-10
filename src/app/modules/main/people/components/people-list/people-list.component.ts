import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  validateForm: FormGroup;

  peopleList: any = [
    {id: 1, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 2, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 3, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 4, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 5, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 1, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 2, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 3, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 4, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'},
    {id: 5, imgUrl: '', name: '匡凌熙', introduce: '这是个人介绍'}
  ]

  pageIndex: number = 1;

  total: number = 500;

  pageSize: number = 10;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      level: [0],
      search: [null]
    });
  }

}
