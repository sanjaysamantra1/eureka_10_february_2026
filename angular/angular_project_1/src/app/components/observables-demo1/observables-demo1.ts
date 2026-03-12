import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-observables-demo1',
  imports: [CommonModule],
  templateUrl: './observables-demo1.html',
  styleUrl: './observables-demo1.css',
})
export class ObservablesDemo1 {
  ngOnInit() {
    // this.from_demo();
    this.interval_demo();
  }

  from_demo() {
    // publisher , subscriber
    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsProvider = from(cars);
    // old syntax
    // carsProvider.subscribe(
    //   (nextResponse) => {
    //     console.log('Response: ', nextResponse);
    //   },
    //   (err) => {
    //     console.log('Error: ', err);
    //   },
    //   () => {
    //     console.log('All Data Received...');
    //   },
    // );

    carsProvider.subscribe({
      next: (nextResponse) => console.log('Response: ', nextResponse),
      error: (err) => console.log('Error: ', err),
      complete: () => console.log('complated... '),
    });
  }

  num_provider = interval(1000);
  even_num_provider = this.num_provider.pipe(filter((val) => val % 2 == 0));
  square_num_provider = this.num_provider.pipe(map((val) => val * val));

  interval_demo() {
    this.num_provider.subscribe((val) => console.log('Value: ', val));
  }

  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));
}
