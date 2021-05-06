import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
// import { TabsetComponent } from 'ngx-bootstrap/tabs';
// import { IProperty } from './../Iproperty.interface';
import { IProperty } from './../../model/propertyBase/iproperty';
import { IpropertyBase } from './../../model/propertyBase/propertyBase';

@Component({
  selector: 'app-add-property',
  // templateUrl: './add-property.component.html',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  // @ViewChild('Form')
  // addPropertyForm: NgForm | undefined ;
  @ViewChild('formTabs')
  formTabs!: TabsetComponent;
  addPropertyForm ! : FormGroup;
  NextClicked !:boolean
  AddPropertyComponent ={}

  proportyTypes: Array<string> =["House","Apartment","Duplex"]
  furnishTypes: Array<string> =["Full ","semi","unFurnish"]
  propertyView: IpropertyBase ={
    Id:'',
    Name:'',
    SellRent:'',
    Type:'',
    Price:'',
    Image:'',
    BHK:'',
    city:'',
    BulitArea:'',
    address:'',
    RTM:'',
    PType:'',
    fType:'',
  }



  constructor(private fb : FormBuilder  ,private router:Router) { }

  ngOnInit() {
    this.createAddPropertyForm();
  }
createAddPropertyForm(){
  this.addPropertyForm = this.fb.group({
    BasicInfo:this.fb.group({
      Name:['', Validators.required ],
      SellRent:['1',Validators.required],
      BHK:['',Validators.required],
      PType:['',Validators.required],
      fType:['',Validators.required],
      city:['',Validators.required],
    }),
    PriceAndArea:this.fb.group({
      Price:['',Validators.required],
      BuildArea:['',Validators.required],

    }),
    Address:this.fb.group({
      address:['',Validators.required]

    }),
    otherDetails:this.fb.group({
      RTM:['',Validators.required],


    }),
    Uploads:this.fb.group({
      Image:['',Validators.required]
    })








  })
}
get BasicInfo(){
  return this.addPropertyForm.controls.BasicInfo as FormGroup;
}
get PriceAndArea(){
  return this.addPropertyForm.controls.PriceAndArea as FormGroup;
}
get Address(){
  return this.addPropertyForm.controls.Address as FormGroup;

}
get otherDetails(){
  return this.addPropertyForm.controls.otherDetails as FormGroup;

}
get Uploads(){
  return this.addPropertyForm.controls.Uploads as FormGroup;
}
get SellRent(){
 return this.BasicInfo.controls.SellRent as FormControl;
}
get BHK(){
  return this.BasicInfo.controls.BHK as FormControl;
}
get PType(){
  return this.BasicInfo.controls.PType as FormControl;
}
get fType(){
  return this.BasicInfo.controls.fType as FormControl;
}
get Name(){
  return this.BasicInfo.controls.Name as FormControl;
}
get city(){
  return this.BasicInfo.controls.city as FormControl;
}
get Price(){
  return this.PriceAndArea.controls.Price as FormControl;
}
get BuildArea(){
  return this.PriceAndArea.controls.BuildArea as FormControl;
}
get address(){
  return this.Address.controls.Address as FormControl;
}
get RTM(){
  return this.otherDetails.controls.RTM as FormControl;
}



  onBack()
  {
    this.router.navigate(['/'])

  }

  onSubmit(){
    this.NextClicked=true;
    if(this.BasicInfo.invalid){
      this.formTabs.tabs[0].active = true;
      return;
}
if(this.PriceAndArea.invalid){
  this.formTabs.tabs[1].active=true;

}
if(this.Address.invalid){
  this.formTabs.tabs[2].active=true;

}

    console.log(this.addPropertyForm)
    console.log("sellRent="+this.addPropertyForm?.value.BasicInfo.SellRent)
    console.log('form submited')
  }
  selectTab(nextTabId: number, IsCurrentTabValid:boolean) {
    this.NextClicked=true;
    if(IsCurrentTabValid){
      this.formTabs.tabs[nextTabId].active = true;

    }

  }

}
