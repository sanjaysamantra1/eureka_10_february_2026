import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [
    RouterLink
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users: WritableSignal<any> = signal([]);
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      this.users.set(response);
    });
  }
}
