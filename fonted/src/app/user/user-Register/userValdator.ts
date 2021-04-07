import { FormControl } from '@angular/forms';
export class userValidator {
  public static passwordMatcher(password:string,conformPassword:string){
    return (control:FormControl):{[s:string]:boolean}=>{
      if(password !== conformPassword){
        return { 'passwordMatching': false }

      }
      else{
        return  {'passwordMatching':true}
      }

    }
  }

}
