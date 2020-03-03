import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class tokenInterceptor implements HttpInterceptor {

  constructor(
    private cookieService:CookieService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    if(this.cookieService.check('access_token')) {
      const token = this.cookieService.get('access_token');
      const authReq = req.clone({ setHeaders: { access_token: token } });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}