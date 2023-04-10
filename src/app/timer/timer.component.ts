import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  selectedShape: string = '';

  selectShape(shape: string) {
    this.selectedShape = shape;
  }
  counterStarted = false;
    counter = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
  }

  startCounter() {
    this.counterStarted = true;
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.intervalId);
    this.counterStarted = false;
    this.counter = 0;
  }
}
