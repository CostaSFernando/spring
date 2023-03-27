import { Itranslate } from './../../interfaces/translate.interface';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
import { Router } from '@angular/router';
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
  openMenu = false;

  constructor(
    private readonly translationService: TranslationService,
    private router: Router
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

  redirectButton(button: string) {
    this.openMenu = !this.openMenu;
    this.router.navigate([button]);
  }

}
