import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Model/user';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  searchItem!:String ; 
  List_user:User[]=[];
  newUser!:User;


 
constructor(private Router:Router, private users:UserService){
}
ngOnInit() {
  this.users.getAllUsers().subscribe(
    (data: any) => {
      this.List_user = data;
    },
    (error) => {
      console.error('Une erreur s\'est produite :', error);
    }
  );
}



deleteUser(id:string) {
  console.log(id)
  this.users.deleteUser(id).subscribe(()=>alert('id deletefd'));
}

//adduser()
//{
  //this.users.addUser(this.user).subscribe(()=>{alert('added succefully');
  //this.Router.navigate(['useres']);
//}

  //);

//}



add(F: NgForm) {

  console.log(this.List_user.length);
  
  if (F.valid) {
    this.newUser= {
       id: (this.List_user.length + 1).toString(),
       firstName: F.value.firstName,
       lastName: F.value.lastName,
       birthDate: F.value.birthDate,
       email: F.value.email,
       password: F.value.password,
       profession: F.value.profession,
       accountCategory: F.value.accountCategory,
       picture: F.value.picture,
     };
     console.log(this.newUser.firstName);
     
     
 
     //this.List_user.push(newUser);
      this.users.addUser(this.newUser).subscribe(()=>{alert('added succefully');
    });

     F.resetForm();
  }
 }
}

