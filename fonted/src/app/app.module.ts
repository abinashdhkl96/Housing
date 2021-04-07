import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// MDB Angular Free
import {HttpClientModule} from '@angular/common/http';
import { IconsModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { propertCardComponent } from './property/propert-card/property-card.component';
import { PropertListComponent } from './property/propert-list/propert-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-Login/user-Login.component';
import { UserRegisterComponent } from './user/user-Register/user-Register.component';
import {  RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

const appRoutes : Routes=
[
  {path:'', component:PropertListComponent},
  {path:'add-property', component:AddPropertyComponent},
  // {path:'rent-property', component:PropertyDetailsComponent},
  {path:'property-details/:id', component:PropertyDetailsComponent},
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
      UserRegisterComponent
   ],
  imports: [






  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      MDBBootstrapModule.forRoot(),
      IconsModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)

  ],
  providers: [
    HousingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
