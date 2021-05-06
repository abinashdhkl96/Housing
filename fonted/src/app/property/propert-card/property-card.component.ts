import { Component, Input } from "@angular/core";
import { IpropertyBase } from './../../model/propertyBase/propertyBase';

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
  property!: IpropertyBase;
  @Input()  hideIcons !: boolean;


}
