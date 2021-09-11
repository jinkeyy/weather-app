import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { MenuService } from 'src/app/services/menu.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  dataWeather: any = []
  dataWeekWeather: any = []
  lat: number = 0
  lon: number = 0
  city: string = ""
  constructor(
    private menuService: MenuService,
    private weatherService: WeatherService,
    private loadingService: LoadingService,
    private http: HttpClient
  ) {
    this.loadingService.openLoading()
  }

  ngOnInit(): void {
    this.getWeekWeatherData()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        this.lat = position.coords.latitude
        this.lon = position.coords.longitude
        this.http.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.lat}&longitude=${this.lon}&localityLanguage=vi`).pipe().subscribe((res: any)=>{
          this.city = res.locality +" - " +res.city
        })
      });
    } else {
      this.lat = 21.0245
      this.lon = 105.8412
      this.city= "Hà Nội"
    }
  }
  getWeekWeatherData = () => {
    this.weatherService.getWeekWeek(this.lat, this.lon).subscribe((res: any) => {
      this.dataWeather = res.daily
      for (let i = 1; i < 7; i++) {
        this.dataWeekWeather.push(this.dataWeather[i])
      }
    })
  }
  getWeekDays = (dateGetTime: any) => {
    const date = new Date(dateGetTime * 1000)
    let weekDays

    switch (date.getDay() + 1) {
      case 2:
        weekDays = "Thứ 2"
        break;
      case 3:
        weekDays = "Thứ 3"
        break;
      case 4:
        weekDays = "Thứ 4"
        break;
      case 5:
        weekDays = "Thứ 5"
        break;
      case 6:
        weekDays = "Thứ 6"
        break;
      case 7:
        weekDays = "Thứ 7"
        break;
      case 1:
        weekDays = "Chủ Nhật"
        break;
      default:
    }
    return weekDays
  }
  getDate = (dateGetTime: any) => {
    const date = new Date(dateGetTime * 1000)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
  mathRound = (number: any) => {
    return Math.round(number)
  }
  ngAfterViewInit() {
    this.loadingService.closeLoading()
  }
}
