import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
// import { TabsetComponent } from 'ngx-bootstrap/tabs';
// import { IProperty } from './../Iproperty.interface';
import { IProperty } from './../../model/propertyBase/iproperty';
import { IpropertyBase } from './../../model/propertyBase/propertyBase';
import {Property} from './../../model/property/property';
import { HousingService } from './../../services/housing.service';
import { AlertifyService } from './../../services/alertify/alertify.service';
import { iif } from 'rxjs';

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
   cityList!: any[];
  AddPropertyComponent ={}
  property = new Property();


  proportyTypes: Array<string> =["House","Apartment","Duplex"]
  furnishTypes: Array<string> =["Full ","semi","unFurnish"]

  propertyView: IpropertyBase ={
    Id : '',
    SellRent:'',
   BHK:'',
    PType: '',
    fType:'',
    Name: '',
    city:'',
    Price:'',
  BuildArea: '',
  security:'',
  maintance:'',
  carpetArea: '',
  address:'',
  floor: '',
  totalFloor:'',
  landMark:'',
   RTM:'',
   date: '',
   age: '' ,
   community:'',
   entrance:'',
   description:'',
    Image : '',
    postOn:'',
  postBy:'',
  }



  constructor(private fb : FormBuilder  ,private router:Router, private houseService : HousingService, private alertify:AlertifyService) { }

  ngOnInit() {
    this.createAddPropertyForm();
    this.houseService.getAllCities().subscribe(
      data=>{
        this.cityList= data;
        console.log('data', data);

      }
    )
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
      security:['0',],
      maintance:['',],
      carpetArea:['',]

    }),
    Address:this.fb.group({
      address:['',Validators.required],
      floor:['',Validators.required],
      totalFloor:['',Validators.required],
      landMark:['',Validators.required],


    }),
    otherDetails:this.fb.group({
      RTM:['2',Validators.required],
      date:['',],
      age:['',Validators.required],
      community:['',Validators.required],
      entrance:['',Validators.required],
      description:['',Validators.required]


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
get addressInfo(){
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
get security(){
  return this.PriceAndArea.controls.security as FormControl;
}
get maintance(){
  return this.PriceAndArea.controls.maintance as FormControl;
}
get floor(){
  return this.addressInfo.controls.floor as FormControl;
}
get totalFloor(){
  return this.addressInfo.controls.totalFloor as FormControl;
}
get landMark(){
  return this.addressInfo.controls.landMark as FormControl;
}
get address(){
  return this.addressInfo.controls.address as FormControl;
}

get RTM(){
  return this.otherDetails.controls.RTM as FormControl;
}
get date(){
  return this.otherDetails.controls.date as FormControl;
}
get age(){
  return this.otherDetails.controls.age as FormControl;
}
get community(){
  return this.otherDetails.controls.community as FormControl;
}
get entrance(){
  return this.otherDetails.controls.entrance as FormControl;
}
get description(){
  return this.otherDetails.controls.description as FormControl;
}
get Image(){
  return this.Uploads.controls.Image as FormControl;
}



  onBack()
  {
    this.router.navigate(['/'])

  }

  onSubmit(){
    this.NextClicked=true;
    if(this.allTabsValid()){
      this.mapProperty();
      this.houseService.addProperty(this.property)
      console.log(this.addPropertyForm)
      this.alertify.success('Property added successfully')
      if(this.SellRent.value=='2'){
        this.router.navigate(['/rent-property'])
      }
      else{
        this.router.navigate(['/'])

      }

      console.log("sellRent="+this.addPropertyForm?.value.BasicInfo.SellRent)
      console.log('form submited')

    }
    else{
      this.alertify.error("please review your form");
    }



  }

  allTabsValid() :boolean{
    if(this.BasicInfo.invalid){
      this.formTabs.tabs[0].active = true;
      return false;
}
if(this.PriceAndArea.invalid){
  this.formTabs.tabs[1].active=true;
return false;
}
if(this.addressInfo.invalid){
  this.formTabs.tabs[2].active=true;
  return false;

}
if(this.otherDetails.invalid){
  this.formTabs.tabs[3].active=true;
  return false;

}
// if(this.Uploads.invalid){
//   this.formTabs.tabs[4].active=true;
//   return false;

// }
return true;

  }

  selectTab(nextTabId: number, IsCurrentTabValid:boolean) {
    this.NextClicked=true;
    if(IsCurrentTabValid){
      this.formTabs.tabs[nextTabId].active = true;

    }

  }
  mapProperty () : void{
    this.property.Id=this.houseService.newPropID();
    this.property.SellRent = +this.SellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.PType = this.PType.value;
    this.property.fType = this.fType.value;
    this.property.Name = this.Name.value;
    this.property.city = this.city.value;
    this.property.Price = this.Price.value;
    this.property.BuildArea = this.BuildArea.value;
    this.property.address = this.address.value;
    this.property.RTM = this.RTM.value;
    // this.property.security = this.security.value;
    // this.property.maintance = this.maintance.value;

  }

}

