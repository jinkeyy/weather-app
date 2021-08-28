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
  getWeekWeek() {
    return this.http.get(this.apiURL + "/data/2.5/onecall?lat=21.0245&lon=105.8412&exclude=current,minutely,hourly&appid=a5baaf83acd61ead8f2b525537740766&units=metric&lang=vi").pipe()
  }
}
