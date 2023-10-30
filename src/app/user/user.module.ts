import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserService } from '../Core/Services/user.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdduserComponent,
    UpdateuserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers:[UserService]
})
export class UserModule { }
