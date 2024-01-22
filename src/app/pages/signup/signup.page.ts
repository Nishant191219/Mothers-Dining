import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
  signUp(data:any){
    console.log(data);
    this.user.userSignUp(data);
    //this.router.navigate(['home'])
  }

}
