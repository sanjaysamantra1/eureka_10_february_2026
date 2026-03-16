import { FormDemo1 } from './../form-demo1/form-demo1';
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
import { ObservablesDemo2 } from '../observables-demo2/observables-demo2';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { TemplateForm } from '../template-form/template-form';
import { ModelForm } from '../model-form/model-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';

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
    // ObservablesDemo1
    // ObservablesDemo2
    // SubjectDemo1,
    // SignalDemo1
    // SignalDemo2
    // FormDemo1
    // TemplateForm
    // ModelForm
    DynamicForm
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag: boolean = true;
}
