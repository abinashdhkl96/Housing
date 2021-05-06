import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {PasswordValidators} from 'ngx-validators'
import {userValidator} from './userValdator'
import { UserServiceService } from './../../services/user-service.service';
import { User } from 'src/app/model/user';
import {AlertifyService} from './../../services/alertify/alertify.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-Register',
  templateUrl: './user-Register.component.html',
  styleUrls: ['./user-Register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  user!: User;
  submitted: boolean = false;
  Router: any;
  // @Input() password='';
  //  @Input() passwordConform='';


  constructor(private fb: FormBuilder, private userService : UserServiceService,private alertify:AlertifyService, private router:Router) { }

  ngOnInit() {
    this.registerationForm= this.fb.group({
      userName: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password:[null,[ Validators.required ,Validators.minLength(6)]],
      conformPassword: [null,[Validators.required]],
      mobileNumber: [null,[Validators.required,Validators.maxLength(10)]]
    },
    // { Validators :this.passwordMatchingValidator}
    // {Validator.passwoe}
    // PasswordValidators.mismatchedPasswords('password','conformPassword')

    );
  }
    passwordMatchingValidator( FormGroup:FormGroup):Validators {
      const password = FormGroup.get('password')?.value
      const confirmPassword = FormGroup.get('conformPassword')?.value
        return  password === confirmPassword
        ? {'':null}
        :
         {notMatch:true}



      }
      userData():User{
        return this.user={
          userName: this.userName.value,
          email : this.email.value,
          password:this.password.value,
          conformPassword:this.conformPassword.value,
          mobileNumber:this.mobileNumber.value
        }

      }

      get userName(){
        return this.registerationForm.get('userName') as FormControl

      }
      get email(){
        return this.registerationForm.get('email') as FormControl

      }
      get password(){
        return this.registerationForm.get('password') as FormControl

      }
      get conformPassword(){
        return this.registerationForm.get('conformPassword') as FormControl

      }
      get mobileNumber(){
        return this.registerationForm.get('mobileNumber') as FormControl

      }




  onSubmit(){
    console.log('registration Form',this.registerationForm.value);
    this.submitted=true
    if(this.registerationForm.valid){
      // this.user = Object.assign(this.user,this.registerationForm.value);

      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.submitted=false
     this.alertify.success('Succussfully Register');
     this.router.navigate(['/user/login']);
    }else{
     this.alertify.error('Something is Wrong');

    }


  }




}


