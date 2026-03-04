import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableContextMenu]',
})
export class DisableContextMenu {
  @HostListener('contextmenu', ['$event'])
  disableRightClick(event: any) {
    console.log('Right Click action', event.type);
    alert('This Function is not allowed here')
    event.preventdefault();
  }
}
