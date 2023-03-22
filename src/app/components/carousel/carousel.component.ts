import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  @Input() imagesList: any[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  adjustImage(e: WheelEvent) {
    const action = e.deltaY < 0 ? 'up' : 'down';
    const container = e?.target ? e.target : {} as any;

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
