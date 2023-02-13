import { TranslationService } from 'src/app/services/translation.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Itranslate } from 'src/app/interfaces/translate.interface';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.sass']
})
export class CardProductsComponent implements OnInit {

  @Input() product: any;
  modal: boolean = false
  private translate: string = 'BR';

  constructor(
    private router: Router,
    private translationService: TranslationService
  ) { }


  ngOnInit(): void {
    this.translationService.getSelectedTranslate().subscribe(
      resp => this.translate = resp.type
    );
  }

  get getDescription() {
    return this.product.description[this.translate]
  }

  controlModal(status: boolean) {
    this.modal = status
  }

  showProduct(id: number) {
    this.router.navigate([`/product/${id}`]);
  }

}
