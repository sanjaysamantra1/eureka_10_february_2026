import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  user_api = 'https://jsonplaceholder.typicode.com/users';
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.fetch_user_data_javascript();
    this.fetch_user_data_angular();
  }

  fetch_user_data_javascript() {
    fetch(this.user_api)
      .then((response) => {
        response.json().then((finalData) => {
          console.log(finalData);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetch_user_data_angular() {
    // httpClient.get() returns observable
    this.httpClient.get(this.user_api).subscribe((response) => {
      console.log(response);
    });
  }

  add_user_data() {
   /*  this.httpClient.post('URL', userObj).subscribe((response) => {
      console.log(response); // add a new user
    }); */
  }
}
