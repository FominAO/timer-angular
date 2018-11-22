import { Component, Injectable, Output, EventEmitter } from "@angular/core";

@Injectable() 
export class ClosePalletService {
    @Output() opened = new EventEmitter<boolean>()
    palletClicked = false;
    clickOnParent() {
            this.closePallet(this.palletClicked)
    }
    closePallet(clicked) {
        this.opened.emit(clicked)
        this.palletClicked = false;
    }
}