import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clocks= [1,22,56,0]
  circleColor = "#d82"
  circleWidth = "300"
  circleStrokeWidth = "8px"
  textMatr = ["matrix(1 0 0 1 180 340)", "matrix(1 0 0 1 120 340)", "matrix(1 0 0 1 120 340)", "matrix(1 0 0 1 180 340)"]
  changeColor(e) {
    if ((e.length == 3) || (e.length == 6)) {
    this.circleColor = "#" + e;
  }
  }
  changeSW(e) {
    if (+e < 50) {
    this.circleStrokeWidth = e + "px"
  }
  }
}


