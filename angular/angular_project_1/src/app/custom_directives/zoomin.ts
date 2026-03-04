import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  // elementRef = new ElementRef();
  constructor(private elementRef: ElementRef) { // Dependency Injection
    console.log(elementRef)
  }

  @HostListener('mouseenter', ['$event'])
  applyZoomIn(event: any) {
    this.elementRef.nativeElement.style.transform = 'scale(100%,105%)'
  }
  @HostListener('mouseleave', ['$event'])
  removeZoomIn(event: any) {
    this.elementRef.nativeElement.style.transform = 'scale(100%)'
  }
}
