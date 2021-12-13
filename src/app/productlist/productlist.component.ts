import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import {Router} from '@angular/router';
import {Product} from '../product';
import { Province } from '../province';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _route: Router, private _service: NgserviceService, private _liveAnnouncer: LiveAnnouncer) { }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._service.fetchListFromRemote().subscribe(
      data => this.products = data, error => console.log("Exception occurred 1"),
    )
  }
  isEmpty()
  {
    if (this.products == null)
    {
      return true;
    }
    else { return false; }
  }

  goToAddProduct() {
    this._route.navigate(['/addproduct']);
  }

  goToUpdateProduct(id: number) {
    console.log("id: "+ id);
    this._route.navigate(['/editproduct', id]);
  }


  goToViewProduct(id: number){
    this._route.navigate(['/viewproduct', id]);

  }

  deleteProduct(id: number) {
    if (confirm('Are you sure ?'))
  return this._service.deleteBdyIdFromRemote(id).subscribe(
    success =>{
      ("Product deleted succesfully");
    },
    error=> {console.log("Exception occured 2"); this.getProducts()}
   )
  }

}
