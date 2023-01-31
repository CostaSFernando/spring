import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  private products = require('../../../../assets/data/products.json');
  listProducts: any[] = [];

  constructor() {
    this.listProducts = this.products.products
  }

  ngOnInit(): void { }

  filterProducts(str: HTMLInputElement) {
    this.listProducts = this.products.products.filter((item: any) => item.label.includes(str.value));
  }

  filterProductsWithCategory(e: HTMLSelectElement, str: HTMLInputElement) {
    const category = e.selectedOptions[0].value
    this.listProducts = this.products.products.filter((item: any) => (item.category === category || category === 'all') && item.label.includes(str.value));
  }

}
