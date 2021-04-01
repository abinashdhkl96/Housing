import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {

  properties: Array<any>=[
    {
    "id":1,
    "Name":"Sachin Gaire",
    "Type":"House",
    "Price":"20,000,00"
  },
  {
    "id":2,
    "Name":"Komal Dhakal",
    "Type":"House",
    "Price":"30,000,00"
  },
  {
    "id":3,
    "Name":"Sishr Bhattarai",
    "Type":"House",
    "Price":"10,000,00"
  },
  {
    "id":4,
    "Name":"Abinash Dhakal",
    "Type":"House",
    "Price":"80,000,00"
  },
  {
    "id":5,
    "Name":"Anisha Gautam",
    "Type":"House",
    "Price":"40,000,00"
  },
  {
    "id":6,
    "Name":"Dikshya Dhakal",
    "Type":"House",
    "Price":"70,000,00"
  },


]

  constructor() { }

  ngOnInit(): void {
  }

}
