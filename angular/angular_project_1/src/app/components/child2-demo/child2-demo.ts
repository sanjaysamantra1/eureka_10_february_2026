import { Component } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs: ['aChild2', 'cars', 'employee'],
})
export class Child2Demo {
  aChild2: any;
  cars: any;
  employee: any;

  ngOnChanges() {
    console.log('child-2 ngOnChanges');
  }
  ngDoCheck() {
    console.log('child-2 ngDoCheck');
  }
}
