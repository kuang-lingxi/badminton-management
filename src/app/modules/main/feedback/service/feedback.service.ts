import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get(`api/feedback/list`);
  }

  update(status: number, id: number) {
    const params = {
      status,
      id
    }
    return this.http.post(`api/feedback/update`, params);
  }
}
