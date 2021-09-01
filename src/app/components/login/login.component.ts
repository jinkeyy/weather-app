import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log = ""
  username: string = ""
  password: string = ""
  constructor(
    private authService: AuthServiceService,
    private user: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  login = (e: any) => {
    e.preventDefault();
    this.log = `<div class="spinner-border text-secondary"></div>`
    const data = {
      username:this.username,
      password: this.password
    }
    this.user.loginUser(data).subscribe((res: any)=>{
      this.log = ""
      localStorage.setItem('user', res.username);
      localStorage.setItem('id', res._id);
      this.authService.login()
      this.router.navigate(["/admin"])
    },
    (error)=>{
      this.log = error.error.error
    })
  }
  updateUserName = (e: any) => {
    this.username = e.value
  }
  updatePassword = (e: any) => {
    this.password = e.value
  }
}
