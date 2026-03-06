import { Pipe, PipeTransform } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'mySort',
  pure: false
})
export class MySortPipe implements PipeTransform {

  transform(arr: number[]) {
    console.log('Sort pipe called...')
    return arr.sort((a: number, b: number) => a - b);
  }

}
