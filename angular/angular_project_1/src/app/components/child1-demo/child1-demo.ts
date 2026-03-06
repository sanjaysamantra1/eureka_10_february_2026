import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a'],
  outputs: ['eventObj']
})
export class Child1Demo {
  a: any;
  cars = ['Tata', 'Honda', 'Maruti'];
  user = { name: 'Mahesh', age: 25, sal: 5000, add: 'virginia' };

  eventObj = new EventEmitter();
  sendDataToParent() {
    this.eventObj.emit(this.user);
  }
}
