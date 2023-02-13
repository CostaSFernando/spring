import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.sass']
})
export class CardProductsComponent implements OnInit {

  @Input() product: any;
  modal: boolean = false

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  controlModal(status: boolean) {
    this.modal = status
  }

  showProduct(id: number) {
    this.router.navigate([`/product/${id}`]);
  }

}
