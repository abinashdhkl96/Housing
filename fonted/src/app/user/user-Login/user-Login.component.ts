import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertifyService } from './../../services/alertify/alertify.service';

@Component({
  selector: 'app-user-Login',
  templateUrl: './user-Login.component.html',
  styleUrls: ['./user-Login.component.css']
})
export class UserLoginComponent implements OnInit {


  constructor(private authservice:AuthService,private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
  }

onLogin(loginForm:NgForm){
  console.log(loginForm.value)
  const token =this.authservice.authUser(loginForm.value)
  if(token){
    localStorage.setItem('token',token.userName)
    console.log('Login Successfully!!')
    this.router.navigate(['/']);
    this.alertify.success('Login Sucessfully!!');
  }
  else{
    console.log('login Failed!!');
    this.alertify.error('username or password is Invalid');
  }


}
}
