import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  checkLogin: boolean = false
  constructor(
    public menuService: MenuService,
    public authService: AuthServiceService
    ) { 
       
  }
  ngOnInit(): void {
    this.checkLogin = this.authService.isAuthorized
  }
  clickBtnClose = ()=>{
    this.menuService.closeMenu()
  }
}
