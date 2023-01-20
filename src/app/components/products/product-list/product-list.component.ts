import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  private products = require('../../../../assets/data/products.json');
  listProducts: any;

  constructor() { }

  ngOnInit(): void {
    this.listProducts = this.products
  }

}
