import { Component, ContentChild, contentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  imports: [],
  templateUrl: './my-modal.html',
  styleUrl: './my-modal.css',
})
export class MyModal {
  @ContentChild('myTitle') myTitle: any;
  @ViewChild('myBox') myBox: any;
  constructor() {
    console.log('MyModal constructor');
    console.log(this.myTitle);
    console.log(this.myBox);
  }
  ngAfterContentInit() {
    console.log('MyModal ngAfterContentInit');
    console.log(this.myTitle);
    this.myTitle.nativeElement.style.color = 'red';
  }
  ngAfterViewInit() {
    console.log('MyModal ngAfterViewInit');
    console.log(this.myBox);
    this.myBox.nativeElement.style.color = 'blue';
  }
}
