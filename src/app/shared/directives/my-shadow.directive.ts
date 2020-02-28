import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyShadow]'
})
export class MyShadowDirective implements OnInit {

  @Input() fgShadow: string;

  @Input() bgShadow: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.fgShadow = this.fgShadow || '#ccc';
    this.bgShadow = this.bgShadow || '#f00';
    this.setShadow(this.fgShadow);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setShadow(this.bgShadow);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setShadow(this.fgShadow);
  }

  setShadow(color) {
    this.el.nativeElement.style.boxShadow = '12px 12px 10px ' + color;
  }

}
