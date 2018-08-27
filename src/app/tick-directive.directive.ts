import { Directive, ElementRef, Renderer2, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTickDirective]'
})
export class TickDirectiveDirective implements OnInit{
  @Input () clockType: number;
  @Input () clockCount: number;
  @HostBinding ('style.strokeDasharray') strokeDasharray: string = "0, 1508"
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    if (this.clockType != 0) {
      this.strokeDasharray = (1508 - Math.round(25.13*this.clockCount)) + ', 1508'
        } else {
          this.strokeDasharray = (1508 - Math.round(62.83*this.clockCount)) + ', 1508'

        }
  }

}
