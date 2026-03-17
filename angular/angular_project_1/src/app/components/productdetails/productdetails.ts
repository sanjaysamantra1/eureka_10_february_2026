import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
  ActivatedRoute = inject(ActivatedRoute);
  product:any;

  ngOnInit(){
    this.ActivatedRoute.queryParams.subscribe(params=>{
      console.log(params)
      this.product = params;
    })
  }
}
