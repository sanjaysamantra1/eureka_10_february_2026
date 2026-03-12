import { ObservablesDemo1 } from './../observables-demo1/observables-demo1';
import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { ProductList } from '../product-list/product-list';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    // DirectivesDemo,
    // ProductList
    // PipesDemo
    // ParentDemo
    // Demo1,
    // Demo2
    // HttpDemo1
    // CommentList
    // EmployeeList
    ObservablesDemo1
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag:boolean = true;
}
