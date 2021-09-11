import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiURL = 'https://api.openweathermap.org';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getWeekWeek(lat: any, lon: any) {
    return this.http.get(this.apiURL + `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=a5baaf83acd61ead8f2b525537740766&units=metric&lang=vi`).pipe()
  }
}
