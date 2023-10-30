import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Model/user';

@Component({
 selector: 'app-updateuser',
 templateUrl: './updateuser.component.html',
 styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  user: User | undefined;
   id: string | null = null;

 constructor(private actR: ActivatedRoute, private us: UserService) { }

 ngOnInit(): void {
  this.actR.paramMap.subscribe(params => {
     this.id = params.get('id');
 
     if (this.id) {
       this.us.getUser(this.id).subscribe(user => {
         this.user = user;
       });
     }
  });
 }
}