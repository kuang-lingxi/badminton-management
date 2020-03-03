import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class prefixInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const secureReq = req.clone({
      url: `http://localhost:8080/${req.url}`
    });
    return next.handle(secureReq);
  }
}