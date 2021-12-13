import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import {Product} from '../product';
import { Province } from '../province';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product = new Product();
  provinces: Array<Province> = [];
  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
    this.getProvince();
  }

addformsubmit()
{
this._service.addToRemote(this.product).subscribe
(
  data =>{
    console.log("Data added successfully");
    this._route.navigate(['productlist']);
  },
  error =>console.log("Error")
)
}

getProvince() {
  this._service.fetchProvinceFromRemote().subscribe(
    data => this.provinces = data, error => console.log("Exception occurred 1"),
  )
}
isEmpty()
  {
    if (this.provinces == null)
    {
      return true;
    }
    else { return false; }
  }

  gotolist() {
    this._route.navigate(['productlist']);
  }
}
