import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    FormsModule,
    CommonModule,
    RemainingPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  myName: string = 'Sachin tEnDULkAr';
  mySal: number = 5000;
  dateObj = new Date();
  user = { name: 'Nikhil', age: 21, sal: 5000, address: 'Virginia' };
  arr = [10, 20, 30, 40, 50, 60, 70];
  msg: string = 'Hello';
}
