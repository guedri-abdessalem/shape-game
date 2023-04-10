import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Shape } from '../board/board.component'
interface Card {
  type: string;
  image: string;
  state: 'visible' | 'hidden';
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() shape: Shape;
  @Input() flipped = true;
  @Output() flip = new EventEmitter<void>();

  onClick(): void {
    this.flip.emit();
  }

}
