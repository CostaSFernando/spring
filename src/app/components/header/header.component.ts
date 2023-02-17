import { Itranslate } from './../../interfaces/translate.interface';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
const configData = require('../../../assets/data/data.json');
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  translations!: Itranslate[];
  translateItem!: Itranslate;
  config = configData;

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

  get buttons(): string[] {
    return Object.keys(this.config.buttons)
  }

  selectTranslate(item: Itranslate) {
    this.translationService.selectTranslate(item.type)
  }

  selectedTranslate(item: Itranslate) {
    return item.type === this.translateItem.type
  }

}
