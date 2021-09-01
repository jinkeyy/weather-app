import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private username: any = ""
  private id: any = ""
  public isAuthorized: boolean = false
  constructor(private router: Router) {
    if(localStorage.getItem('user')&&localStorage.getItem('id')){
      this.username = localStorage.getItem('user')
      this.id = localStorage.getItem('id')
      this.login()
      this.router.navigate(["/admin"])
    }
  }
  login = () => {
    this.isAuthorized = true
  }
  logout = () => {
    this.isAuthorized = false
    localStorage.clear();
    this.router.navigate(["/login"])
  }
}
