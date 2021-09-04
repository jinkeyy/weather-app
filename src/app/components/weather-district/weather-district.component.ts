import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-district',
  templateUrl: './weather-district.component.html',
  styleUrls: ['./weather-district.component.css']
})
export class WeatherDistrictComponent implements OnInit {
  filter: any[] = []
  selectedFilter: any
  dataWeather: any = []
  myDate: any = Date.now();
  

  constructor(private weatherApi: WeatherService, private http: HttpClient) {
    this.init()
  }

  ngOnInit(): void {
    this.getApi()
  }

  init(){
    this.filter = [
      { Code: 0, Name: "Ba Đình"},
      { Code: 1, Name: "Cầu Giấy"},
      { Code: 2, Name: "Đống Đa"},
      { Code: 3, Name: "Hai Bà Trưng"},
      { Code: 4, Name: "Hoàn Kiếm"},
      { Code: 5, Name: "Hoàng Mai"},
      { Code: 6, Name: "Hà Đông"},
      { Code: 7, Name: "Long Biên"},
      { Code: 8, Name: "Nam Từ Liêm"},
      { Code: 9, Name: "Bắc Từ Liêm"},
      { Code: 10, Name: "Tây Hồ"},
      { Code: 11, Name: "Thanh Xuân"},
      { Code: 12, Name: "Sơn Tây"},
      { Code: 13, Name: "Ba Vì"},
      { Code: 14, Name: "Chương Mỹ"},
      { Code: 15, Name: "Đan Phượng"},
      { Code: 16, Name: "Đông Anh"},
      { Code: 17, Name: "Gia Lâm"},
      { Code: 18, Name: "Hoài Đức"},
      { Code: 19, Name: "Mê Linh"},
      { Code: 20, Name: "Mỹ Đức"},
      { Code: 21, Name: "Phú Xuyên"},
      { Code: 22, Name: "Phúc Thọ"},
      { Code: 23, Name: "Quốc Oai"},
      { Code: 24, Name: "Sóc Sơn"},
      { Code: 25, Name: "Thạch Thất"},
      { Code: 26, Name: "Thanh Oai"},
      { Code: 27, Name: "Thanh Trì"},
      { Code: 28, Name: "Thường Tín"},
      { Code: 29, Name: "Ứng Hòa"},
    ]
    this.selectedFilter = "Cầu Giấy"
  }

  getApiUrl() {
    return this.http.get(this.weatherApi.apiURL + "/data/2.5/onecall?lat=21.012260&lon=105.803457&appid=a5baaf83acd61ead8f2b525537740766&units=metric&lang=vi").pipe()
  }

  getApi(){
    this.getApiUrl().subscribe((data: any) => {
      this.dataWeather = data.daily
    })
  }

  showScore(value: any) {
    return value.toFixed(1)
  }
  mathRound = (number: any) => {
    return Math.round(number)
  }
  changeFilter($event: any){
    console.log(this.selectedFilter)
  }
  
  getSvg() { 
    
  }
}
