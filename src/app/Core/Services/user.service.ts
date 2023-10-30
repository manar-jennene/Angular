import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user';

@Injectable(//injecti 
//equivalent ll table providers f appmodule.ts  provideres bch nyaayat ll injectable
)
export class UserService {
  
URl="http://localhost:3000/users"

  constructor(private http:HttpClient) { }
  
  getAllUsers(){
      return this.http.get(this.URl);
    }
  
    
  
  
    addUser(user: any): Observable<any> {
      return this.http.post(this.URl, user);
    }
    
    deleteUser (id: string): Observable<User> {
      let url=this.URl+'/'+id;
      return this.http.delete<User>(url);
      }

      

        getUser(id: string): Observable<User> {
          return this.http.get<User>(this.URl + '/' + id);
         }





  
}
