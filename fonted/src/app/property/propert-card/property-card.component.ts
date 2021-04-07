import { Component, Input } from "@angular/core";
import { IProperty } from './../Iproperty.interface';

@Component(
  {
    selector:'app-propert-Card',
    // template:'<h1>My property card</h1>',
    templateUrl:'./proerty-card.html',
  //  styles:['h1{font-weight:normal};']
  styleUrls:['./property-card.component.css']

  }
)
export class propertCardComponent{
  @Input()
  property!: IProperty;


}
