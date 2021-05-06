import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './addProperty',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm: NgForm | undefined ;
  @ViewChild('formTabs') formTabs !: TabsetComponent;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onBack()
  {
    this.router.navigate(['/'])

  }
  onSubmit(Form : NgForm){

    console.log(this.addPropertyForm)
    console.log('form submited')
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
