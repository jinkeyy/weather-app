import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'https://weatherhnapi.herokuapp.com';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  loginUser(body: any) {
    return this.http.post(this.apiURL + "/login", body, {withCredentials: true }).pipe()
  }
}
