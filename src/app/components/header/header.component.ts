import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }
  getWeekDays = ()=>{
    const date = new Date()
    let weekDays
    switch(date.getDay()+1) {
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
  getDate = ()=>{
    const date = new Date()
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  }
  clickOpenMenu = () => {
    this.menuService.openMenu()
  }
}
