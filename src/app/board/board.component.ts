import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { delay } from 'rxjs';
import { CardComponent } from "../card/card.component";

interface Card {
  shape: string;
  flipped: boolean;
  hidden: boolean;
  component?: CardComponent;
}

export interface Shape {
  id: number, name: string
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  shapes: Shape[];
  flippedShapes: number[] = [];
  remainingPairs = 3;
  seconds = 0;
  timer: any;
  movements = 0;
  payloadShape: Shape;
  waitingPair = false;

  constructor() {
    this.shuffleShapes();
    this.startTimer();
  }

  shuffleShapes(): void {
    this.shapes = [{ id: 1, name: 'square' }, { id: 2, name: 'triangle' },
    { id: 3, name: 'circle' }, { id: 4, name: 'square' },
    { id: 5, name: 'triangle' }, { id: 6, name: 'circle' }];
    for (let i = this.shapes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shapes[i], this.shapes[j]] = [this.shapes[j], this.shapes[i]];
    }
  }

  isFlipped(shapeId: number): boolean {
    return this.flippedShapes.includes(shapeId);
  }

  onFlip(shape: Shape): void {
    this.movements++;
    if (this.waitingPair) {
      this.waitingPair = false;
      if (this.payloadShape.name === shape.name) {
        this.flippedShapes.push(shape.id);

      } else {
        this.flippedShapes.push(shape.id);
        setTimeout(() => {
          this.flippedShapes.pop();
          this.flippedShapes.pop();
        }, 600);

      }
    } else {
      this.payloadShape = shape;
      this.flippedShapes.push(shape.id);
      this.waitingPair = true;
    }

    if (this.flippedShapes.length === this.shapes.length)
      setTimeout(() => {
        alert(`You won in ${this.seconds} seconds!`);
      }, 600);

  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  restart() {
    this.flippedShapes = []
    this.seconds = 0;
    this.movements = 0;
    this.shuffleShapes();
    this.startTimer();
  }
}
