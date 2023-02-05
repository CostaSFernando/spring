import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  private products = (require('../../../assets/data/products.json')).products;
  listProducts: any

  constructor() {}

  ngOnInit(): void {
    this.listProducts = [this.products[0], this.products[1], this.products[2], this.products[3], this.products[4]]
  }
}
