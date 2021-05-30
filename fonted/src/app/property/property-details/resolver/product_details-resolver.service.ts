import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Property } from 'src/app/model/property/property';
import { Observable, of } from 'rxjs';
import { HousingService } from './../../../services/housing.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Product_detailsResolverService implements Resolve<Property | undefined|null>{

constructor(private router : Router ,private housing : HousingService) { }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
 Observable <Property | undefined|null>  {
  const propId = route.params['id']
  return this.housing.getProperty(+propId).pipe(
    catchError(error =>{
      this.router.navigate(['/']);
      return of (null);

    })
  );
 
}

}
