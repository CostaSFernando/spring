import { TranslationService } from './../../services/translation.service';
import { Component, OnInit } from '@angular/core';

const config = require('../../../assets/data/data.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  config = config
  textDescription: string = '';

  constructor(
    private translationService: TranslationService
  ) { }

  ngOnInit(): void {
    this.translationService.getSelectedTranslate().subscribe(
      res => {
        this.textDescription = config.home.description[res.type];
      }
    )
  }

}
