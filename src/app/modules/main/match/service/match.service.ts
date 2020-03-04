import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../../../common/data/response';
import { Observable } from 'rxjs';

@Injectable()
export class MatchService {

  constructor(
    private http: HttpClient
  ) { }

  insertMatch(match: any): Observable<Response> {
    return this.http.post<Response>("api/match/add", match);
  }

  getType(): Observable<Response> {
    return this.http.get<Response>("api/type/list");
  }

  getMatchList(status: number, pageSize: number, pageIndex:number, keywords: string = ""): Observable<Response> {
    return this.http.get<Response>(`api/match/list?status=${status}&pageSize=${pageSize}&pageIndex=${pageIndex}&keywords=${keywords}`);
  }

}
