import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { MainInvoiceComponent } from "./main-invoice/main-invoice.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { AddproductComponent } from "./product/addproduct/addproduct.component";
import { UpdateuserComponent } from "./user/updateuser/updateuser.component";


const routes:Routes =[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:'users',loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)},
  {path:'products',loadChildren: ()=> import('./product/product.module').then(m=>m.ProductModule)},
  {path:'providers',loadChildren: ()=> import('./provider/provider.module').then(m=>m.ProviderModule)},
  {path:'invoice', component:MainInvoiceComponent},
  { path: 'invoice/:id/:active', component: InvoiceComponent },
  {path:"**", component:ErrorPageComponent}

    //children:[{path:"addUser",component:AddUserComponent}]
  
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  