import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isCollapsed = false;

  user: string;

  constructor(
    private cookieService: CookieService
  ) {
    this.user = this.cookieService.get("username");
  }

  ngOnInit() {
  }

}
