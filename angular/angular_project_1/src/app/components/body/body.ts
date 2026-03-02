import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    // DirectivesDemo
    ProductList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
