import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {userValidator} from './userValdator'


@Component({
  selector: 'app-user-Register',
  templateUrl: './user-Register.component.html',
  styleUrls: ['./user-Register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  user = {
    username: '',
    email: '',
    password: ''
  };
  submitted = false;
  // @Input() password='';
  //  @Input() passwordConform='';


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerationForm= this.fb.group({
      userName: ['',Validators.required],
      email: [,[Validators.required,Validators.email]],
      password:[,[ Validators.required ,Validators.minLength(6)]],
      conformPassword: [,[Validators.required]],
      mobileNumber: [,[Validators.required,Validators.maxLength(10)]]
    },
    this.passwordMatchingValidator
    // {Validator.passwoe}

    );
  }
    passwordMatchingValidator( FormGroup:FormGroup) {
        return FormGroup.get('password')?.value === FormGroup.get('conformPassword')?.value
        ? null
        :
         {notMatch:true}



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
    console.log('registration Form',this.registerationForm)


  }


}
function control(control: any, arg1: { userName: (string | ((control: import("@angular/forms").AbstractControl) => ValidationErrors | null))[]; email: (((control: import("@angular/forms").AbstractControl) => ValidationErrors | null)[] | undefined)[]; password: (((control: import("@angular/forms").AbstractControl) => ValidationErrors | null)[] | undefined)[]; conformPassword: (((control: import("@angular/forms").AbstractControl) => ValidationErrors | null)[] | undefined)[]; mobileNumber: (((control: import("@angular/forms").AbstractControl) => ValidationErrors | null)[] | undefined)[]; }, passwordMatchingValidator: (FormGroup: FormGroup) => { notMatch: boolean; } | null): FormGroup {
  throw new Error('Function not implemented.');
}

