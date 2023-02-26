import { TranslationService } from 'src/app/services/translation.service';
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
  translate: string = 'BR'

  constructor(
    private activatedRouteSnapshot: ActivatedRoute,
    private readonly translationService: TranslationService
  ) {
    const id = this.activatedRouteSnapshot.snapshot.params['id'];
    this.product = products.products.find((prd: any) => `${prd.id}` === `${id}`)
  }

  ngOnInit(): void {
    this.translationService.getSelectedTranslate().subscribe(
      res => {
        this.translate = res.type
      }
    )
  }

  ngAfterViewChecked(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  get getDescription() {
    if (this.product?.description && this.product?.description[this.translate]) {
      return this.product.description[this.translate]
    } else if (this.product?.description && this.product?.description['BR']) {
      return this.product.description['BR']
    } else {
      return ''
    }
  }

}
