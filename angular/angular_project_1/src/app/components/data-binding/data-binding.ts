import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  userName: string = 'Virat Kohli';
  img_url: string = 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png';
  flag: boolean = true;

  num1: number = 1;
  num2: number = 2;

  toggleFlag() {
    this.flag = !this.flag;
  }

  addResult: number = 0;
  addition(val1: any, val2: any) {
    this.addResult = +val1 + +val2;
  }
}
