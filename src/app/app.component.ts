import { Component } from '@angular/core';
import { UserService } from './Core/Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projettestmanar';
  constructor(private user:UserService){}

    //ngOnInit(){
      //console.log(this.user.List_users)

    
  //}
}
