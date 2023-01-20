import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.sass']
})
export class CardProductsComponent implements OnInit {

  @Input() product: any;
  modal: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  controlModal(status: boolean) {
    this.modal = status
  }

}
