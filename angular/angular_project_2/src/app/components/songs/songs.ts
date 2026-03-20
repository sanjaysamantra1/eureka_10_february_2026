import { Component } from '@angular/core';

@Component({
  selector: 'app-songs',
  imports: [],
  templateUrl: './songs.html',
  styleUrl: './songs.css',
})
export class Songs {
  processData(data: any) {
    console.log('Processing data:', data);
    return data.length;
  }
  fetchData() {
    const data = ['item1', 'item2', 'item3'];
    return this.processData(data);
  }
}
