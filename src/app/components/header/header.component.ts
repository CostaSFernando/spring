import { Itranslate } from './../../interfaces/translate.interface';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  translations!: Itranslate[];
  translateItem!: Itranslate

  constructor(
    private readonly translationService: TranslationService
  ) { }

  ngOnInit(): void {
    this.translationService.listTranslateObjects().subscribe(
      res => {
        this.translations = res
      }
    )

    this.translationService.getSelectedTranslate().subscribe(
      res => {
        this.translateItem = res
      }
    )
  }

  selectTranslate(item: Itranslate) {
    this.translationService.selectTranslate(item.type)
  }

  selectedTranslate(item: Itranslate) {
    return item.type === this.translateItem.type
  }

}
