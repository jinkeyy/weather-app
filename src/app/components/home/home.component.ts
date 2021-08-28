import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataWeather: any = []
  dataWeekWeather: any = []
  constructor(
    private menuService: MenuService,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.getWeekWeatherData()
  }
  getWeekWeatherData = () => {
    this.weatherService.getWeekWeek().subscribe((res: any) => {
      this.dataWeather = res.daily
      for(let i = 1 ; i < 7; i++){
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
}
