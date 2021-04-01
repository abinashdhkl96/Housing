import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { propertCardComponent } from './property/propert-card/property-card.component';
import { PropertListComponent } from './property/propert-list/propert-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    propertCardComponent,
    PropertListComponent,
      NavBarComponent
   ],
  imports: [

  BrowserModule,
    AppRoutingModule,

      MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
