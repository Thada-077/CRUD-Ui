import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }
  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Login Success")
        this._route.navigate(['/productlist'])
      },
      error => {
        this.msg = "Login Fail : Wrong username or password"
      }
    )
  }
  gotoregister() {
    this._route.navigate(['register']);
  }
}
