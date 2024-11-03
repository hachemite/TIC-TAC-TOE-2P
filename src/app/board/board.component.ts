import { Component ,OnInit} from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent, CommonModule, NgFor, NgIf],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  squares :any = [];
  xIsNext: boolean = true;
  winner: string = '';
  draw:boolean = false;
  scorex: number = 0;
  scoreo: number = 0;

    newGame() {
      this.squares = Array(9).fill(null);
      this.xIsNext = true;
      this.winner = '';
      this.draw = false;
    }

    get player() {
      return this.xIsNext ? 'X' : 'O';
    }

    calculateWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]
        ) {
          return this.squares[a];
        }
      }
      return null;
    }

    makeMove(idx: number) {
      if (!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }
      this.winner = this.calculateWinner();
      if (this.winner === 'X') {
        this.scorex++;
      } else if (this.winner === 'O') {
        this.scoreo++;
      }

      // Check for draw if there's no winner
      if (!this.winner && this.squares.every((cell: any) => cell !== null)) {
        this.draw = true;
      }
    }

    ngOnInit(): void {
      this.newGame();
    }

  }

