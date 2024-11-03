import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { AiToggleComponent } from './ai-toggle/ai-toggle.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareComponent,AiToggleComponent, CommonModule, BoardComponent, NgFor, NgIf],
  template:`

  <title >{{title}}</title>

  <app-board></app-board>
  <router-outlet></router-outlet>

  `,

  styles: '* {background-color: blanchedalmond;}'})
export class AppComponent {
  title = 'tic-tac-toe';
}
