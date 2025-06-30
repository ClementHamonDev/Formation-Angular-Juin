import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  colorInput = input<string>('')

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.colorInput() || 'green')
  }

  @HostListener('mouseleave') onMouseLeave (){
    this.highlight('')
  }

  constructor(private element: ElementRef) {
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color
  }

}
