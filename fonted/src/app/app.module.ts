import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserServiceService } from './services/user-service.service';
import { HousingService } from './services/housing.service';
// MDB Angular Free
import {HttpClientModule} from '@angular/common/http';
import { IconsModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { propertCardComponent } from './property/propert-card/property-card.component';
import { PropertListComponent } from './property/propert-list/propert-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-Login/user-Login.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UserRegisterComponent } from './user/user-Register/user-Register.component';
import {ValidatorsModule} from 'ngx-validators'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {  RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AlertifyService } from './services/alertify/alertify.service';
import { AuthService } from './services/auth/auth.service';
import { Product_detailsResolverService } from './property/property-details/resolver/product_details-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


const appRoutes : Routes=
[
  {path:'', component:PropertListComponent},
  {path:'add-property', component:AddPropertyComponent},
  {path:'property-details/:id', component:PropertyDetailsComponent, resolve:{prp : Product_detailsResolverService}},
  // {path:'rent-property', component:PropertyDetailsComponent},

  {path:'user/login', component:UserLoginComponent},
  {path:'user/register', component:UserRegisterComponent},
  {path:'**', component:PropertListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    propertCardComponent,
    PropertListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailsComponent,
      UserLoginComponent,
      UserRegisterComponent,


   ],
  imports: [






  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      MDBBootstrapModule.forRoot(),
      IconsModule,
      FormsModule,
      ReactiveFormsModule,
      ValidatorsModule,
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      BrowserAnimationsModule,
      BsDatepickerModule.forRoot(),
      NgxGalleryModule

  ],
  providers: [
        HousingService,
    UserServiceService,
       AlertifyService,
           AuthService,
           Product_detailsResolverService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
