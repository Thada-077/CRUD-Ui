import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductlistComponent} from './productlist/productlist.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {ViewproductComponent} from './viewproduct/viewproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addproduct', component: AddproductComponent},
  {path: 'editproduct/:id', component: EditproductComponent},
  {path: 'editproduct', component: EditproductComponent},
  {path: 'viewproduct', component: ViewproductComponent},
  {path: 'viewproduct/:id', component: ViewproductComponent},
  {path: 'productlist', component: ProductlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
