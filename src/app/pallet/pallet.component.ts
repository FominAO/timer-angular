import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pallet',
  templateUrl: './pallet.component.html',
  host: {class: 'app-pallet-insert'},
  styleUrls: ['./pallet.component.css']
})
export class PalletComponent implements OnInit {
  @Output() onPickColor = new EventEmitter<string>()
  panelClosed = true;
  palletClosed = true;
  chosenColor;
  pickedColor = 'rgb(229, 167, 149)'
  colorRows = [
    ['rgb(248, 246, 247)', 'rgb(208, 206, 176)', 'rgb(208, 206, 176)', 'rgb(208, 206, 176)', 'rgb(96, 91, 67)', 'rgb(53, 50, 46)'],
    ['rgb(240, 215, 186)', 'rgb(229, 167, 149)', 'rgb(239, 140, 118)', 'rgb(224, 119, 111)', 'rgb(205, 93, 83)', 'rgb(169, 64, 60)'],
    ['rgb(203, 50, 52)', 'rgb(182, 36, 40)', 'rgb(182, 36, 40)', 'rgb(98, 31, 31)', 'rgb(113, 53, 46)', 'rgb(152, 118, 83)'],
    ['rgb(107, 89, 88)', 'rgb(94, 72, 69)', 'rgb(86, 60, 61)', 'rgb(97, 15, 24)', '#fff', '#000']
  ];
  constructor() { }

  ngOnInit() {
  }
  pickColor(color) {
    this.pickedColor = color;
  }
  chooseColor() {
    this.onPickColor.emit(this.pickedColor)
  }
  togglePallet() {
    if (this.palletClosed){
      this.toggle1();
      setTimeout(this.toggle2.bind(this), 200)
    } else {
    this.toggle2();
    setTimeout(this.toggle1.bind(this), 200)
    }
  }
  toggle1() {
    this.palletClosed = !this.palletClosed
  }
  toggle2() {
    this.panelClosed = !this.panelClosed;
  }
}
