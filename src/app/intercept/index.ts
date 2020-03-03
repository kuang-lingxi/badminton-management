import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { prefixInterceptor } from './prefixIntercept';
import { tokenInterceptor } from './tokenIntercept';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: prefixInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true }
];