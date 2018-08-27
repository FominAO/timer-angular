import { Directive, ElementRef, Renderer2, OnInit, Input, HostBinding, HostListener } from "@angular/core";
import { tick } from "@angular/core/testing";

@Directive({
    selector: '[tiсking]'
})
export class Ticking implements OnInit{

    // @Input() tick:string = "1512, 1800";
    // @HostBinding('style.strokeDasharray') strokeDasharray: string;

    constructor(private elRef: ElementRef) {}

    ngOnInit () {
        console.log('directive on')
         this.elRef.nativeElement.style.color = "red";
    }
}
