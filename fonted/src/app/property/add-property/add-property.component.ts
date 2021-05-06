import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
// import { TabsetComponent } from 'ngx-bootstrap/tabs';
// import { IProperty } from './../Iproperty.interface';
import { IProperty } from './../../model/propertyBase/iproperty';
import { IpropertyBase } from './../../model/propertyBase/propertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm: NgForm | undefined ;
  @ViewChild('formTabs')
  formTabs!: TabsetComponent;
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
    RTM:'',
    PType:'',
    fType:'',
  }



  constructor(private router:Router) { }

  ngOnInit() {
  }
  onBack()
  {
    this.router.navigate(['/'])

  }
  onSubmit(Form : NgForm){

    console.log(this.addPropertyForm)
    console.log("sellRent="+this.addPropertyForm?.value.BasicInfo.SellRent)
    console.log('form submited')
  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
