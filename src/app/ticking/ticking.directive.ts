import { Directive, ElementRef, Renderer2, OnInit, Input, HostBinding, HostListener } from "@angular/core";
import { tick } from "@angular/core/testing";

@Directive({
    selector: '[tiking]'
})
export class Ticking implements OnInit{

    @Input() tick:string = "1512, 1800";
    @HostBinding('style.strokeDasharray') strokeDasharray: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit () {
        
    }
}
