import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../common/data/response';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(
    private http: HttpClient
  ) { }

  getApplication(status: number): Observable<Response> {
    return this.http.get<Response>(`api/referee/list?status=${status}`);
  }
}
