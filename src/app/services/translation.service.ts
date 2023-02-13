import { Itranslate } from './../interfaces/translate.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const translateItems = require('./../../assets/data/translate.json');

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translate: BehaviorSubject<Itranslate[]>

  private translateItem: BehaviorSubject<Itranslate>

  constructor() {
    this.translate = new BehaviorSubject(translateItems)
    this.translateItem = new BehaviorSubject(translateItems[0])
  }

  public listTranslateObjects(): Observable<Itranslate[]> {
    return this.translate.pipe(
      map(resp => resp)
    )
  }

  public getSelectedTranslate() {
    return this.translateItem.pipe(
      map(resp => resp)
    )
  }

  public selectTranslate( type: string ) {
    const translateItem = translateItems.find((item: Itranslate) => item.type === type)
    if (!translateItem) {
      // Show error translate
    } else {
      this.translateItem.next(translateItem);
    }
  }
}
