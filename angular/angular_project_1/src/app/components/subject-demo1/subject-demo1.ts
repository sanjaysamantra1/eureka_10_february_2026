import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.subject_demo();
    // this.behaviourSubject_demo();
    // this.replaySubject_demo();
    this.asyncSubject_demo();
  }
  subject_demo() {
    let carsSubject = new Subject();
    carsSubject.next('Plan-A');
    carsSubject.next('Plan-B');
    carsSubject.subscribe((val) => console.log('Subcriber-1: ', val));
    carsSubject.next('Plan-C');
    carsSubject.subscribe((val) => console.log('Subcriber-2: ', val));
    carsSubject.next('Plan-D');
  }
  behaviourSubject_demo() {
    let carsSubject = new BehaviorSubject('Default plan');
    carsSubject.subscribe((val) => console.log('Subcriber-1: ', val));
    carsSubject.next('Plan-A');
    carsSubject.next('Plan-B');
    carsSubject.next('Plan-C');
    carsSubject.subscribe((val) => console.log('Subcriber-2: ', val));
    carsSubject.next('Plan-D');
  }
  replaySubject_demo() {
    let carsSubject = new ReplaySubject();
    carsSubject.next('Plan-A');
    carsSubject.next('Plan-B');
    carsSubject.subscribe((val) => console.log('Subcriber-1: ', val));
    carsSubject.next('Plan-C');
    carsSubject.subscribe((val) => console.log('Subcriber-2: ', val));
    carsSubject.next('Plan-D');
  }
  asyncSubject_demo() {
    let carsSubject = new AsyncSubject();
    carsSubject.next('Plan-A');
    carsSubject.next('Plan-B');
    carsSubject.subscribe((val) => console.log('Subcriber-1: ', val));
    carsSubject.next('Plan-C');
    carsSubject.subscribe((val) => console.log('Subcriber-2: ', val));
    carsSubject.next('Plan-D');
    carsSubject.complete();
  }
}
