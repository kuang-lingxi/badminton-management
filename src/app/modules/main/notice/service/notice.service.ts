import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/modules/common/data/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(
    private http: HttpClient
  ) { }

  insertNotice(title: string, content: string, promulgator: string, top: number, time: string): Observable<Response> {
    const params = {
      title,
      content,
      promulgator,
      top,
      time
    }
    return this.http.post<Response>("api/notice/insert", params);
  }

  getNotice(pageSize: number, pageIndex: number): Observable<Response> {
    return this.http.get<Response>(`api/notice/list?delete=0&pageSize=${pageSize}&pageIndex=${pageIndex}`);
  }
}
