import { Component ,OnInit} from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';



import { AiToggleComponent } from '../ai-toggle/ai-toggle.component'; // Ensure this path is correct

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [AiToggleComponent, SquareComponent, CommonModule, NgFor, NgIf],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'], // Fix the key here
})
export class BoardComponent {
  squares :any = [];
  xIsNext: boolean = true;
  winner: string = '';
  draw:boolean = false;
  playerAI: boolean = false; // This is correctly defined
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

    // Method to find the best move
findBestMove(): number {
  // Define winning lines
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

  // 1. Check if AI can win
  for (const [a, b, c] of lines) {
      if (this.squares[a] === 'O' && this.squares[b] === 'O' && this.squares[c] === null) return c;
      if (this.squares[a] === 'O' && this.squares[c] === 'O' && this.squares[b] === null) return b;
      if (this.squares[b] === 'O' && this.squares[c] === 'O' && this.squares[a] === null) return a;
  }

  // 2. Check if AI needs to block the opponent
  for (const [a, b, c] of lines) {
      if (this.squares[a] === 'X' && this.squares[b] === 'X' && this.squares[c] === null) return c;
      if (this.squares[a] === 'X' && this.squares[c] === 'X' && this.squares[b] === null) return b;
      if (this.squares[b] === 'X' && this.squares[c] === 'X' && this.squares[a] === null) return a;
  }

  // 3. Take the center if available
  if (this.squares[4] === null) return 4;

  // 4. Take any available corner
  const corners = [0, 2, 6, 8];
  for (let corner of corners) {
      if (this.squares[corner] === null) return corner;
  }

  // 5. Take any remaining empty space
  for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i] === null) return i;
  }

  return -1; // No moves left (should not happen in normal play)
}
      makeMove(idx: number) {
        if (!this.squares[idx]) {
          this.squares.splice(idx, 1, this.player);
          this.xIsNext = !this.xIsNext;

          if (this.playerAI) {
            let computerIdx = this.findBestMove();
            if (computerIdx !== -1) {
                this.squares[computerIdx] = 'O';
                this.xIsNext = !this.xIsNext;
            }
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
    }

    ngOnInit(): void {
      this.newGame();
    }


  }

