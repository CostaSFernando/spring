import { Component, Input, OnInit } from '@angular/core';
import { Itranslate } from 'src/app/interfaces/translate.interface';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  @Input() table: any
  translate: string = 'BR'

  constructor(
    private readonly translationService: TranslationService
  ) { }

  ngOnInit(): void {
    this.translationService.getSelectedTranslate().subscribe(
      res => {
        this.translate = res.type
      }
    )
  }

  getValueTableWithTranslate(item: any): string {
    if (typeof item === 'string') {
      return item
    }
    return item? `${item[this.translate]}` : 'ERROR'

  }

}
