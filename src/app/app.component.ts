import { Component, OnInit } from '@angular/core';
import { Ticking } from './ticking/ticking.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  timerLabel = 'Label'
  getCode = false;
  customCode:string = "";
  customDate:Date;
  title = 'app';
  currentDate:Date;
  timer;
  newDate:Date;
  maxDate:Date;
  circleRadius = 225;
  clocks= [1,22,56,0]
  sliderVal = 300
  circleColor = "#999"
  circleWidth = "300"
  stroked;
  strokedRed:string;
  circleStrokeWidth = "8"
  twoNumberMatr = "matrix(1, 0, 0, 1, 120, 340)"
  oneNumberMatr = "matrix(1, 0, 0, 1, 180, 340)";
  textMatr = ["matrix(1 0 0 1 180 340)", "matrix(1 0 0 1 120 340)", "matrix(1 0 0 1 120 340)", "matrix(1 0 0 1 180 340)"]
  changeColor(e) {
    this.circleColor = e;
  }
  changeSW(e) {
    if (+e < 50) {
    this.circleStrokeWidth = e + "px"
  }
  }
  ngOnInit() {
    
    this.currentDate = new Date();
    this.newDate = this.currentDate;
    this.maxDate = new Date(+(this.currentDate) + 8550600000);
    this.customDate = new Date(+(this.currentDate) + 84600000);
    
  }
  tick() {
    if (this.clocks[3] > 0) {
      this.clocks[3] -= 1
    } else {
      this.clocks[3] = 59;
      if (this.clocks[2] > 0) {
        this.clocks[2] -= 1;
      } else {
        this.clocks[2] = 59;
        if (this.clocks[1] > 0) {
          this.clocks[1] -= 1
      } else {
        this.clocks[1] = 23
        if (this.clocks[0] > 0){
        this.clocks[0] -= 1
        }      
      }
    }
  }
  this.setMatrix(); 
    // if (this.clocks[2] > 0 && ){
    //   this.clocks[2] -= 1;
    //   this.clocks[3] = 59;
    // } else if (this.clocks[1] > 0) {
    //   this.clocks[1] -= 1
    //   this.clocks[2] = 59
    // } else {
    //   this.clocks[1] = 23
    //   this.clocks[0] += 1
    // }

// this.strokedRed  = 'stroke-dasharray: ' + this.stroked + ', 1800'
    // for (let i=0; i<4; i++) {
    //   if (i != 0) {
    //   document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + (1512 - Math.round(24.2*this.clocks[i])) + ', 1512'
    //   console.log(document.getElementsByClassName('circle')[i].attributes["style"]) 
    //   } else {
    //     document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + (1512 - Math.round(63*this.clocks[i])) + ', 1512'
    //     console.log(document.getElementsByClassName('circle')[i].attributes["style"]) 
    //   }
      
    // };
  }
  start(newDate) {
      clearInterval(this.timer)
      
      let date = Math.floor((+this.customDate - newDate)/1000)
      this.clocks[3] = date % 60;
      date = Math.floor(date/60);
      this.clocks[2] = date % 60;
      date = Math.floor(date/60);
      this.clocks[1] = date % 24;
      date = Math.floor(date/24)
      this.clocks[0] = date
      this.timer = setInterval(this.tick.bind(this), 1000)
      // for (let i=0; i<4; i++) {
      //   if (i != 0) {
      //   document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + 25.2*this.clocks[i] + ', 1800'
      //   } else {
      //     document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + 63*this.clocks[i] + ', 1800'
      //   }
      //   console.log(document.getElementsByClassName('circle')[i].attributes["style"]) 
      // };
      // this.textMatr[i] = "matrix(1 0 0 1 "+ "180" +" 340)"
    

  }
  stop() {
    clearInterval(this.timer)
  }
  dateChange(e) {
    this.customDate = e.value;
  }
  setMatrix() {
    for (let i=0; i<4; i++) {
      if (this.clocks[i] < 10) { 
        this.textMatr[i] = this.oneNumberMatr
       } else {
        this.textMatr[i] = this.twoNumberMatr
       }
    }
  }
  touchSlider (e) {
    console.log('event: ', e.value)
  }
  setLabel(e) {
    this.timerLabel = e;
  }
  set3() {
    console.log(document.getElementsByClassName('counter'))
    document.getElementsByClassName('st1')[1].innerHTML = '3'
  }
  buildCode () {
    this.getCode = true;
    this.customCode = `<html><head><style>.timer{font-family: Arial, Helvetica, sans-serif;display: flex;flex-wrap: wrap;justify-content: space-between}.timer__label{width: 100%;height: 10%;text-align: center;font-size: 10vw;}.timer__clocks {height: 90%;width: 24%;}.timer-circle{transform: translateY(500px) rotate(-90deg) scaleY(-1) translateY(-500px);transition: 500ms;}</style></head><body><div class="timer"><div class="timer__label">${this.timerLabel}</div><div class="timer__clocks" title="Days"><div class="svg-circle-container"><svg class="svg-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"> <style type="text/css"> .st1{fill: #000000; font-family: "Arial"; font-size: 250px;} </style><circle  class="timer-circle" cx="250" cy="250" r="${this.circleRadius}" fill="none" stroke="${this.circleColor}" stroke-width="${this.circleStrokeWidth}"/><text transform="${this.oneNumberMatr}" class="st1">0</text></svg></div></div><div class="timer__clocks" title="Hours"><div class="svg-circle-container"><svg class="svg-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><style type="text/css"> .st1{fill: #000000; font-family: "Arial"; font-size: 250px;}</style><circle  class="timer-circle" cx="250" cy="250" r="${this.circleRadius}" fill="none" stroke="${this.circleColor}" stroke-width="${this.circleStrokeWidth}"/><text transform="${this.oneNumberMatr}" class="st1">0</text></svg></div></div><div class="timer__clocks" title="Minutes"><div class="svg-circle-container"><svg class="svg-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"> <style type="text/css"> .st1{fill: #000000; font-family: "Arial"; font-size: 250px;}</style><circle  class="timer-circle" cx="250" cy="250" r="${this.circleRadius}" fill="none" stroke="${this.circleColor}" stroke-width="${this.circleStrokeWidth}"/><text transform="${this.oneNumberMatr}" class="st1">0</text></svg></div></div><div class="timer__clocks" title="Seconds"><div class="svg-circle-container"><svg class="svg-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"> <style type="text/css"> .st1{fill: #000000; font-family: "Arial"; font-size: 250px;}</style><circle  class="timer-circle" cx="250" cy="250" r="${this.circleRadius}" fill="none" stroke="${this.circleColor}" stroke-width="${this.circleStrokeWidth}"/><text transform="${this.oneNumberMatr}" class="st1">0</text></svg></div></div></div><script type="text/javascript">class Timer {constructor(goalDate){this.goal = goalDate;this.data = {"days": 0,"hours": 0,"minutes": 0,"seconds": 0}};timer() {let currentDate = new Date();let newDate = this.goal - +currentDate;let seconds = Math.round(+newDate / 1000);let minutes = Math.round((seconds + 30)  / 60);let hours = Math.round((minutes + 30) / 60);let days =  Math.round((hours + 12) / 24);seconds = seconds % 60;minutes = minutes % 60;hours = hours % 24;this.data={"days": days,"hours": hours,"minutes": minutes,"seconds": seconds};return this.data};tick() {let data = this.timer(); let datePart = document.getElementsByClassName("st1"); let dateCircles = document.getElementsByClassName("timer-circle"); var i = 0; for (let key in data) {if (datePart[i].innerHTML != data[key]){datePart[i].innerHTML = data[key]; if (data[key] > 9) {datePart[i].style.transform = "${this.twoNumberMatr}"} else {datePart[i].style.transform = "${this.oneNumberMatr}"} if (key == "hours") {dateCircles[i].style.strokeDasharray = 2*3.14*${this.circleRadius} - Math.round(((2*3.14*${this.circleRadius})/24)*data[key])+", " + 2*3.15*${this.circleRadius}} else {dateCircles[i].style.strokeDasharray = 2*3.14*${this.circleRadius} - Math.round(((2*3.15*${this.circleRadius})/60)*data[key])+", " + 2*3.15*${this.circleRadius}}}i++;}};start() {setInterval(this.tick.bind(this), 1000)}}let timer = new Timer(${+this.customDate});timer.start()</script></body></html>`
  }
}


