import { Directive, ElementRef, Input, OnInit, input } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit {

  borderColor = input<string>('black');
  borderWidth= input<string>('1px');

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.border = `${this.borderWidth()} solid ${this.borderColor()}`;
  }

}
