import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
})
export class Userdetails {
  httpClient = inject(HttpClient);
  activatedRoute = inject(ActivatedRoute);
  user: WritableSignal<any> = signal({});

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.httpClient
        .get(`https://jsonplaceholder.typicode.com/users/${params['id']}`)
        .subscribe((response) => {
          this.user.set(response);
        });
    });
  }
}
