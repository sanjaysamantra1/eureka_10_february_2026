import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { concatMap, filter, forkJoin, from, interval, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observables-demo1',
  imports: [CommonModule],
  templateUrl: './observables-demo1.html',
  styleUrl: './observables-demo1.css',
})
export class ObservablesDemo1 {
  httpClient = inject(HttpClient);

  ngOnInit() {
    // this.from_demo();
    // this.interval_demo();
    // this.formjoin_demo();
    // this.mergeMap_demo();
    this.concatMap_demo();
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

  formjoin_demo() {
    let api_1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let api_2 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');

    forkJoin([api_1, api_2]).subscribe((responseArr) => {
      console.log(responseArr);
    });
  }

  mergeMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable

    userPublisher
      .pipe(
        mergeMap((userId) => {
          return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // inner observable - cart
        }),
      )
      .subscribe((cartResponse) => {
        console.log(cartResponse);
      });
  }

  concatMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable
    userPublisher
      .pipe(
        concatMap((userId) => {
          return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // inner observable - cart
        }),
      )
      .subscribe((cartResponse) => {
        console.log(cartResponse);
      });
  }
}
