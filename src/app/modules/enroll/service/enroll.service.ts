import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../common/data/response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(
    private http: HttpClient
  ) { }

  getMatch(id: number): Observable<Response> {
    return this.http.get<Response>(`api/match/detail?id=${id}`);
  }

  joinTeamMatch(id: number, name: string, userList: string): Observable<Response> {
    const params = {
      id,
      name,
      userList
    }
    return this.http.post<Response>('api/match/joinTeamMatch', params);
  }

  joinMatch(id: number, schoolNumber: string): Observable<Response> {
    const params = {
      id,
      schoolNumber
    }
    return this.http.post<Response>("api/match/joinMatch", params);
  }
}
