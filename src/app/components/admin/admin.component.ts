import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DistrictService } from 'src/app/services/district.service';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  constructor(
    private ElementRef: ElementRef,
    private authService: AuthServiceService,
    private districtService: DistrictService,
    private http: HttpClient
  ) { }
  modal: any
  data: any = []
  log: string = ""
  districtName: string = ""
  lat: number = 0
  lon: number = 0
  ngOnInit(): void {
    this.read()
    this.modal = this.ElementRef.nativeElement.querySelector('#form-add-district');

  }
  read = () => {
    this.districtService.read().subscribe((res: any) => {
      this.data = res

    })
  }
  changeDistrict = () => {
    this.lat = 0
    this.lon = 0
    this.http.get(`http://api.openweathermap.org/geo/1.0/direct?appid=a5baaf83acd61ead8f2b525537740766&q=${this.districtName}`).pipe().subscribe((res: any) => {
      if (res[0]) {
        this.lat = res[0].lat
        this.lon = res[0].lon
    }
    }, (error) => {
    })
  }
  create = (e: any) => {
    e.stopPropagation();

    const data = {
      districtname: this.districtName,
      lat: this.lat,
      lon: this.lon
    }
    this.districtService.create(data).subscribe((res: any) => {
      this.read()
      this.ElementRef.nativeElement.querySelector('.close').click()
      this.lat = 0
      this.lon = 0
      this.districtName = ""
    }, (error) => {
      console.log(error);
      this.log = error.error.notification
    })
  }
  delete = (id: any) => {
    console.log(1);
    if (confirm("Bạn có chắc chắn xóa không!")) {
      this.districtService.delete(id).subscribe((res: any) => {
        if (res.notification) {
          this.read()
        }
      })
    }

  }
  logout = () => {
    this.authService.logout()
  }
}
