
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from './../../services/housing.service';
import { IProperty } from './../Iproperty.interface';


@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {
  SellRent=1;

  properties !: Array <IProperty> ;


  constructor( private route: ActivatedRoute, private housingServices:HousingService ) {

    // this.http.get('data/properties.json')
    // .subscribe(
    //   data=>{
    //     this.properties=data;
    //     console.log(data)
    //   }
    // );

   }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.housingServices.getAllProperties(this.SellRent)
    .subscribe(
      data=>{
        this.properties = data;
        console.log('fetch properties',data);
      },error=>{
        console.log(error);
      }
    );
  }

}
