import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private nzMessageService: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const userMsg = {
      ...this.validateForm.value
    }

    this.loginService.login(userMsg.username, userMsg.password, userMsg.remember).subscribe(response => {
      if(response.code === 0) {
        if(response.message.result) {
          this.loginService.setToken(response.message.token, userMsg.remember);
          this.router.navigateByUrl("/main/overview");w
        }else {
          this.nzMessageService.create('error', '用户名或密码错误');
        }
      }
    })
  }

}
