import { Component, Input, OnInit } from '@angular/core';
import { Shape } from '../board/board.component';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent {
  @Input() shape: Shape;
  @Input() size = 100;

  get trianglePoints(): string {
    const halfSize = this.size / 2;
    return `0,${this.size} ${halfSize},0 ${this.size},${this.size}`;
  }
}

