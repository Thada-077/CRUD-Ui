import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  gotolist() {
    this._route.navigate(['productlist']);
  }
  gotoregister() {
    this._route.navigate(['register']);
  }
}
