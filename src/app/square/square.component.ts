import { Component ,Input,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  template: `
    <button class="btn btn-warning " nbButton *ngIf="!value">{{ value }}</button>
    <button class="btn btn-success" nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button class="btn btn-danger" nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: `button { width: 100%; height: 100%; font-size: 5em !important; }
  button.btn-warning {
  background-color: #FFD700;
  color: #000;
  border-radius: 15px;
  border: 3px solid #FFA500;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

button.btn-success {
  background-color: #98FB98;
  color: #000;

  border-radius: 15px;
  border: 3px solid #32CD32;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

button.btn-danger {
  background-color: #FF6B6B;
  color: #000;

  border-radius: 15px;
  border: 3px solid #FF0000;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

  `
})
export class SquareComponent {
  @Input() value: 'X' | 'O'| null = null;
}
