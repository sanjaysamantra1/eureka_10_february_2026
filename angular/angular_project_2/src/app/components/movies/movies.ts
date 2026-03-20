import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  add(a: number, b: number) {
    return a + b;
  }

  sumOfDigits(num: number) {
    // 125 = 8
    let sum = 0;
    while (num != 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  cars = ['Tata', 'Honda'];
  addNewCar(newCar: string) {
    this.cars.push(newCar);
  }
}
