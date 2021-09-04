import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  apiURL = 'https://weatherhnapi.herokuapp.com';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
  }
  create(body: any) {
    return this.http.post(this.apiURL + "/district", body).pipe()
  }
  read(){
    return this.http.get(this.apiURL + "/district").pipe()
  }
  delete(id:any){
    return this.http.delete(this.apiURL + "/district/"+id).pipe()
  }
}
