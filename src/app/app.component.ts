import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';
  currentDate = 0
  timer;
  newDate = 0
  maxDate = 0
  clocks= [1,22,56,0]
  sliderVal = 300
  circleColor = "999"
  circleWidth = "300"
  stroked;
  strokedRed:string;
  circleStrokeWidth = "8"
  textMatr = ["matrix(1 0 0 1 180 340)", "matrix(1 0 0 1 120 340)", "matrix(1 0 0 1 120 340)", "matrix(1 0 0 1 180 340)"]
  changeColor(e) {
    
    this.circleColor = "#" + e.toString(16);
  }
  changeSW(e) {
    if (+e < 50) {
    this.circleStrokeWidth = e + "px"
  }
  }
  ngOnInit() {
    this.currentDate = Math.floor(+(new Date)/1000000);
    this.newDate = this.currentDate;
    this.maxDate = this.currentDate + 8554;
    
  }
  tick() {
    if (this.clocks[3] > 0) {
      this.clocks[3] -= 1
    } else if (this.clocks[2] > 0){
      this.clocks[2] -= 1;
      this.clocks[3] = 59;
    } else if (this.clocks[1] > 0) {
      this.clocks[1] -= 1
      this.clocks[2] = 59
    } else {
      this.clocks[1] = 23
      this.clocks[0] += 1
    }

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
      
      let date = (newDate - this.currentDate)*1000
      this.clocks[3] = date % 60;
      date = Math.floor(date/60);
      this.clocks[2] = date % 60;
      date = Math.floor(date/60);
      this.clocks[1] = date % 24;
      date = Math.floor(date/24)
      this.clocks[0] = date
      this.timer = setInterval(this.tick.bind(this), 1000)
      for (let i=0; i<4; i++) {
        if (i != 0) {
        document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + 25.2*this.clocks[i] + ', 1800'
        } else {
          document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + 63*this.clocks[i] + ', 1800'
        }
        console.log(document.getElementsByClassName('circle')[i].attributes["style"]) 
      };
      // this.textMatr[i] = "matrix(1 0 0 1 "+ "180" +" 340)"
    

  }
  stop() {
    clearInterval(this.timer)
  } 
}


