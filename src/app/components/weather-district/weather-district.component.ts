import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { DistrictService } from 'src/app/services/district.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-weather-district',
  templateUrl: './weather-district.component.html',
  styleUrls: ['./weather-district.component.css'],
})
export class WeatherDistrictComponent implements OnInit {
  filter: any[] = [];
  selectedFilter: any;
  dataWeather: any = [];
  myDate: any = Date.now();
  listDistrict: any;
  lat: any;
  lon: any;
  city: string = '';

  constructor(
    private weatherApi: WeatherService,
    private http: HttpClient,
    private districtApi: DistrictService
  ) {
    this.init();
  }

  ngOnInit(): void {
    this.getApi();
    this.getDistrict();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.http
          .get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.lat}&longitude=${this.lon}&localityLanguage=vi`
          )
          .pipe()
          .subscribe((res: any) => {
            this.selectedFilter = res.locality;
          });
      });
    } else {
      this.lat = 21.0245;
      this.lon = 105.8412;
      this.selectedFilter = 'Hà Nội';
    }
  }

  init() {}

  getDistrict() {
    this.districtApi.read().subscribe((data: any) => {
      this.listDistrict = data      
    });
  }

  getApiUrl() {
    return this.http
      .get(
        this.weatherApi.apiURL +
          '/data/2.5/onecall?lat=21.036238&lon=105.790581&exclude=current,minutely,hourly&appid=a5baaf83acd61ead8f2b525537740766&units=metric&lang=vi'
      )
      .pipe();
  }

  getApi() {
    this.getApiUrl().subscribe((data: any) => {
      this.dataWeather = data.daily;
    });
  }

  changeFilter(e: any) {
    // var query = _.get(value, 'listDistrict._id')
    // console.log(value, {
    //   options: () => {return query}
    // })

    // console.log(query)

    console.log(e.target.value);

    this.http.get('https://weatherhnapi.herokuapp.com/district/' + e.target.value).pipe().subscribe((data: any) => {
      this.selectedFilter = data.districtname
      this.lat = data.lat
      this.lon = data.lon
      this.http.get(this.weatherApi.apiURL +`/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=current,minutely,hourly&appid=a5baaf83acd61ead8f2b525537740766&units=metric&lang=vi`).pipe().subscribe((data: any) => {
        this.dataWeather = data.daily 
      })
    })

    // for (var i = 0; i <= this.listDistrict.length; i++){
    //   this.lat = this.listDistrict[i].lat
    //   this.lon = this.listDistrict[i].lon
    //   console.log(this.lat)

    // switch (i){
    //   case 1:
    //     this.lat = this.listDistrict[i].lat
    //     this.lon = this.listDistrict[i].lon
    //     console.log(this.lat)
    //     break;
    // }
    // }
  }

  showScore(value: any) {
    return value.toFixed(1);
  }
  mathRound = (number: any) => {
    return Math.round(number);
  };

  getSvg() {}
}
