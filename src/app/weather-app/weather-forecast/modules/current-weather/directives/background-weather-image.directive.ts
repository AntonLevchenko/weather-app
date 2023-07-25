import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { currentWeatherBgImageSelector } from '../state/selectors/current-weather-bg-image.selectors';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";

@Directive({
  selector: '[appBackgroundWeatherImage]'
})
export class BackgroundWeatherImageDirective implements OnInit {

  private imageName: Observable<string> = this.store.select(currentWeatherBgImageSelector);

  constructor(
    private store: Store,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.imageName.subscribe((imageName: string) => {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background',
        `url(${this.getImageUrl(imageName)}) center right`
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'backgroundSize',
        'cover'
      );
    })
  }

  private getImageUrl(imageName: string): string {
    return `./assets/images/cats-forecast/${imageName}.png`
  }

}
