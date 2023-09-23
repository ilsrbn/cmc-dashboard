import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[outlined]'
})
export class OutlinedDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'border-width', '1px');
    this.renderer.setStyle(this.el.nativeElement, 'border-style', 'solid');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', '#e0e0e0');
  }

}
