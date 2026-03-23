import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select((state: any) => state.count); // selector
    console.log(this.count$);
  }

  increment() {
    const actionObj = increment();
    this.store.dispatch(actionObj);
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
