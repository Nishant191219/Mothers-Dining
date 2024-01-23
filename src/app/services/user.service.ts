import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:any){
    this.http.post("http://localhost:3000/users",data,{observe:'response'}).
    subscribe((result)=>{
      console.log("result",result);
      this.router.navigate(['home']);
   })
  }
  userLogin(data:any){
    this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'}).
    subscribe((result:any)=>{
        console.log(result);
        if(result && result.body &&result.body.length){
            console.warn("use Logged in")
            localStorage.setItem('user',JSON.stringify(result.body));
            this.router.navigate(['home']);
        }
        else {
          console.warn("login failed");
        }
    })
  }
}
