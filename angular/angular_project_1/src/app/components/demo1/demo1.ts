import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  myTimer:number;
  constructor() {
    this.myTimer = setInterval(() => {
      console.log('SetInterval from demo-1');
    }, 1000);
  }
  ngOnInit() {
    console.log('Demo-1 ngOnInit');
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.myTimer)
  }
}
