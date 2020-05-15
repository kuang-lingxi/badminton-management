import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/modules/common/data/response';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUser(): Observable<Response> {
    return this.http.get<Response>("api/user/list");
  }

  getPageUser(member: number, keywords: string, pageIndex: number, pageSize: number): Observable<Response> {
    return this.http.get<Response>(`api/user/page?member=${member}&keywords=${keywords}&pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

  getUser(uid: number): Observable<Response> {
    return this.http.get<Response>(`api/user/detail?uid=${uid}`);
  }

  forbid(id: number) {
    const params = {
      id
    }
    return this.http.post(`api/user/forbid`, params);
  }
}
