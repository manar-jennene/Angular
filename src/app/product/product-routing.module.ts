import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {path:"", component:AddproductComponent} ]; 8
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
