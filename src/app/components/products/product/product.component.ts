import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

const products = require('../../../../assets/data/products.json')

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit, AfterViewChecked {

  product: any;

  constructor(
    private activatedRouteSnapshot: ActivatedRoute
  ) {
    const id = this.activatedRouteSnapshot.snapshot.params['id'];
    this.product = products.products.find((prd: any) => `${prd.id}` === `${id}`)
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

}
