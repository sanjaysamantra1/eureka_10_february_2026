import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectivesDemo } from '../directives-demo/directives-demo';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    DirectivesDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
