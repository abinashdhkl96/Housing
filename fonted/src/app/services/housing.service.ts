import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';
import { IpropertyBase } from './../model/propertyBase/propertyBase';
import { Observable } from 'rxjs';
import { Property } from './../model/property/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor( private http:HttpClient) { }

  // getAllProperties(SellRent:number): Observable<IpropertyBase[]>{
  //   return this.http.get<Record<string, IpropertyBase>>('data/properties.json')
  //   .pipe(
  //     map(data => Object
  //       .values(data)

  //     ));
  //   };

  getProperty(Id:number) {
    return this.getAllProperties().pipe(
      map(propertyArray=>{
        return propertyArray.find(p => p.Id == Id);
      })
    )

  }

  getAllProperties(SellRent?:number) : Observable<Property[]>{
   return this.http.get<Record<string,Property>>('data/properties.json')
   .pipe(
map(
  data=>{
    const propertiesArray  : Array<Property> = [];
    let localProperties = JSON.parse(localStorage.getItem('newProp')||'') ;



      if(localProperties){
        for(const id in localProperties){
          if(SellRent){
            if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent===SellRent){
              propertiesArray.push(localProperties[id] );

            }

          }
          else{
            propertiesArray.push(localProperties[id] );

          }

       }


    }

    for (const id in data){
      if(SellRent){
        if(data.hasOwnProperty(id) && data[id].SellRent===SellRent){
          propertiesArray.push(data[id] );
        }

      }else{
        propertiesArray.push(data[id] );


      }



    }
    return propertiesArray;
  }
)
   );

  }
  addProperty(property:Property){
    let newProp = [property]
    if(localStorage.getItem('newProp')){
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp')||'')]

    }
    localStorage.setItem('newProp', JSON.stringify(newProp))

  }
   newPropID(){
  //   if(localStorage.getItem('PID')){
  //   //  localStorage.setItem ('PID',String(localStorage.getItem('PID') || ''+1));
  //   //  return + localStorage.getItem('PID');
  //   localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
  //   return +localStorage.getItem('PID');


  const PID = localStorage.getItem('PID');
  if (PID) {
    const updatedPID = String(+PID + 1);

    localStorage.setItem('PID', updatedPID);
    return updatedPID;
  }
    else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}

