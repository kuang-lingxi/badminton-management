import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    let params = {
      username,
      password
    }
    console.log(params);
    return this.http.post("http://localhost:8080/api/user/login", params);
  }
}
