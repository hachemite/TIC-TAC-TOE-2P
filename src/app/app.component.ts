import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareComponent, CommonModule, BoardComponent, NgFor, NgIf],
  template:`

  <app-board></app-board>
  <router-outlet></router-outlet>

  `,

  styles: '* {background-color: blanchedalmond;}'})
export class AppComponent {
  title = 'myapp';
}
