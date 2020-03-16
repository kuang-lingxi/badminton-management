import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss']
})
export class ResultModalComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      oldTeam1: [10, Validators.required],
      oldTeam2: [11, Validators.required],
      newTeam1: [null, Validators.required],
      newTeam2: [null, Validators.required]
    })

    this.validateForm.get("oldTeam1").disable();
    this.validateForm.get("oldTeam2").disable();
  }
}
