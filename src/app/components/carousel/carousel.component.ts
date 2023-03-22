import { Itranslate } from 'src/app/interfaces/translate.interface';
import { TranslationService } from 'src/app/services/translation.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  @Input() imagesList: any[] = [];
  translate: any = 'BR'

  nextButton: any = {
    "BR": 'Próxima imagem',
    "ESP": 'siguiente imagen',
    "EUA": 'Next image'
  }

  previousButton: any = {
    "BR": 'Imagem Anterior',
    "ESP": 'Imagen anterior',
    "EUA": 'Previous image'
  }

  constructor(
    private readonly translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.translationService.getSelectedTranslate().subscribe(
      res => {
        this.translate = res.type
      }
    )
  }

  get getLabelButtonNextImage() {
    return this.nextButton[this.translate]
  }

  get getLabelButtonPreviousImage() {
    return this.previousButton[this.translate]
  }

  adjustImage(e: WheelEvent) {
    const action = e.deltaY < 0 ? 'up' : 'down';
    const container = e?.target ? e.target : {} as any;

    console.log((container as HTMLElement).ENTITY_NODE);
    if (action === 'up') {

      this.previousImage(container)
    } else if (action === 'down') {
      this.nextImage(container)
    }
  }

  nextImage(images: HTMLElement) {
    images.scrollBy(300, 0);
  }

  previousImage(images: HTMLElement) {
    images.scrollBy(-300, 0);
  }
}
