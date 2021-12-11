import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }
  gotologin() {
    this._route.navigate(['login']);
  }
}
