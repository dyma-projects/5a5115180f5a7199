import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {

    switch (event.key) {
      case 'ArrowUp': {
        this.el.nativeElement.style.color = 'red';
        break;
      }
      case 'ArrowDown': {
        this.el.nativeElement.style.color = 'blue';
        break;
      }
      case 'ArrowLeft': {
        this.el.nativeElement.style.color = 'green';
        break;
      }
      case 'ArrowRight': {
        this.el.nativeElement.style.color = 'yellow';
        break;
      }
    }
  }

  constructor(public el: ElementRef) {
  }

}
