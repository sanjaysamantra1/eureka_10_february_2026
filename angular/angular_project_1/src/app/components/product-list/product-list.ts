import { Component } from '@angular/core';
import product_data from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
@Component({
  selector: 'app-product-list',
  imports: [
    FormsModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = product_data;
  faStar = faStar;
  p = 1;

  categorySet = new Set();


  constructor() {
    this.generateCategoryData()
  }
  generateCategoryData() {
    this.categorySet.add('all');
    for (let prod of this.productArr) {
      this.categorySet.add(prod.category)
    }
    console.log(this.categorySet)
  }

  filterProducts(event: any) {
    const selectedCatrgory = event.target.value;
    this.productArr = product_data.filter(product => {
      return selectedCatrgory === 'all' || product.category === selectedCatrgory;
    });
  }

  sortAsc() {
    this.productArr.sort((p1, p2) => p1.price - p2.price)
  }
  sortDesc() {
    this.productArr.sort((p1, p2) => p2.price - p1.price)
  }
  searchProducts(event: any) {
    const searchText = event.target.value;
    this.productArr = product_data.filter(product => {
      return product.title.toLowerCase().includes(searchText.toLowerCase());
    })
  }

  openAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  openSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    )
  }

}
