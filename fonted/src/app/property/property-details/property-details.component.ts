import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from './../../services/housing.service';
import {Property} from './../../model/property/property';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  // templateUrl: './property_details.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId!: number;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];


  constructor(private route : ActivatedRoute,private router : Router,private housing : HousingService) { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '100%',
          height: '465px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview:true
      },
     
  ];

  this.galleryImages = [
      {
          small: 'assets/images/house/internal/pic-1.jpg',
          medium: 'assets/images/house/internal/pic-1.jpg',
          big: 'assets/images/house/internal/pic-1.jpg'
      },
      {
        small: 'assets/images/house/internal/pic-2.jpg',
        medium: 'assets/images/house/internal/pic-2.jpg',
        big: 'assets/images/house/internal/pic-2.jpg'
      },
      {
        small: 'assets/images/house/internal/pic-3.jpg',
        medium: 'assets/images/house/internal/pic-3.jpg',
        big: 'assets/images/house/internal/pic-3.jpg'
      },
      {
        small: 'assets/images/house/internal/pic-4.jpg',
        medium: 'assets/images/house/internal/pic-4.jpg',
        big: 'assets/images/house/internal/pic-4.jpg'
      },
      {
        small: 'assets/images/house/internal/pic-5.jpg',
        medium: 'assets/images/house/internal/pic-5.jpg',
        big: 'assets/images/house/internal/pic-5.jpg'
      },
      {
        small: 'assets/images/house/internal/pic-6.jpg',
        medium: 'assets/images/house/internal/pic-6.jpg',
        big: 'assets/images/house/internal/pic-6.jpg'
      },
      
  ];

    

    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data)=>{
        this.property = data['prp']
      }
    )
   
  }
}
























  // ngOnInit() {
  //   this.porpertyId= +this.route.snapshot.params['id'];
  //   this.route.params.subscribe(
  //     (params)=>{
  //       this.porpertyId = +params['id'];
  //       this.housing.getProperty(this.porpertyId).subscribe(
  //        (data) =>{
  //           this.property.Name = data?.Name
  //           this.property.BuildArea = data?.BuildArea
  //           this.property.Price = data?.Price
  //           this.property.BHK = data?.BHK
  //           this.property.PType = data?.PType
  //           this.property.address = data?.address
  //           this.property.city = data?.city
  //           this.property.fType = data?.fType
  //           this.property.carpetArea = data?.carpetArea
  //         }

  //       )
  //     }
  //   )
  // }
  // onNext()
  // {
  //   this.porpertyId +=1;
  //   this.router.navigate(['property-details',this.porpertyId])


 // this.route.params.subscribe(
    //   (params)=>{
    //     this.propertyId = +params['id'];
    //     this.housing.getProperty(this.propertyId).subscribe(
    //       data=>{
    //         console.log('ftch by id', this.property);

    //                  this.property.Name = data?.Name;
    //                 this.property.Price = data?.Price;
    //                  this.property.BuildArea = data?.BuildArea
    //                   this.property.address = data?.address
    //                   this.property.BHK = data?.BHK
    //                   this.property.PType = data?.PType
    //                   this.property.address = data?.address
    //                   this.property.city = data?.city
    //                   this.property.fType = data?.fType
    //                   this.property.carpetArea = data?.carpetArea
    //                   this.property.Image = data?.Image
    //       }
    //     )
    //   }
    // )