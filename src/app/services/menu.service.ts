import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }
  isActive: boolean = false;
  styleOpen = { left: "0px" };
  styleClose = { left: "-350px" };
  styleBackOpen = { height: "100vh", background: 'rgba(52,58,64,0.81)', zindex: '2', width: '100vw',cursor: 'pointer'}
  styleBackClose = { display:'none'}
openMenu = () => {
  this.isActive = true;
}
closeMenu = () => {
  this.isActive = false
}
}
