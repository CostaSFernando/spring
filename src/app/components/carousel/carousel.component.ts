import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  private products = (require('../../../assets/data/products.json')).products;
  listProducts: any;

  constructor() { }

  ngOnInit(): void {
    this.listProducts = this.products
  }

}
