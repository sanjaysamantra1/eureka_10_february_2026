import { MathService } from './../../services/math-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  mathService = inject(MathService); // Dependency Injection

  myTimer: number;
  constructor() {
    this.myTimer = setInterval(() => {
      console.log('SetInterval from demo-1');
    }, 1000);
  }
  ngOnInit() {
    console.log('Demo-1 ngOnInit');

    console.log('Sum:', this.mathService.sum([10, 20, 30, 40, 50]));
    console.log('Average:', this.mathService.average([10, 20, 30, 40, 50]));
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.myTimer);
  }
}
