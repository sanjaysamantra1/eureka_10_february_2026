import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { ProductList } from '../product-list/product-list';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    // DirectivesDemo
    // ProductList
    // PipesDemo
    ParentDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
