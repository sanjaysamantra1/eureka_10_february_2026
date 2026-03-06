import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  // pure: false  // Impure pipe
})
export class RemainingPipe implements PipeTransform {
  transform(msg: string) {
    console.log('Remaining Pipe Called...')
    return 100 - msg.length;
  }
}
