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
  clickOpenMenu = () => {
    this.menuService.openMenu()
  }
}
