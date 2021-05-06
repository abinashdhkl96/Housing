import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './../services/alertify/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser!: string;

  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
  }
  loggedIn(){
    this.loggedInUser = localStorage.getItem('token')||'';
    return this.loggedInUser
  }
  loggedout(){
    return localStorage.removeItem('token');
    this.alertify.success("you are logout");
  }

}
