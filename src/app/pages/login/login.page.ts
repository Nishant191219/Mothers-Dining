import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  ngOnInit() {
  }
  login(data:object){
    console.log(data);
    this.user.userLogin(data);
    //this.router.navigate(['home'])
  }

}
