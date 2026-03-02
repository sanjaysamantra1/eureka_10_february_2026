import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyModal } from '../my-modal/my-modal';

@Component({
  selector: 'app-directives-demo',
  imports: [
    CommonModule,
    FormsModule,
    MyModal
  ],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css',
})
export class DirectivesDemo {
  num: number = 4;
  stateArr = ['Andhra Prasesh', 'Karnataka', 'Tamilnadu', 'Odisha', 'Bihar', 'Kerala']
  selectedState = 'Andhra Prasesh';
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];
  products = [];

  myStyle1 = { "color": "green", "backgroundColor": "red", "border": "3px dotted yellow" }
  myStyle2 = { "color": "purple", "backgroundColor": "green", "border": "3px dotted blue" }

  myFunction() {
    return this.num % 2 == 0 ? this.myStyle1 : this.myStyle2;
  }
}
