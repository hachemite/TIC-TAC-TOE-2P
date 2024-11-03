import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ai-toggle',
  standalone: true,
  template: `
    <div class="form-check form-switch mt-3">
      <input
        class="form-check-input"
        type="checkbox"
        id="toggleAI"
        [checked]="playerAI"
        (change)="togglePlayerAI()"
      />
      <label class="form-check-label" for="toggleAI">AI Player</label>
    </div>
  `,
  styleUrls: ['./ai-toggle.component.scss'],
})
export class AiToggleComponent {
  @Input() playerAI: boolean = false;
  @Output() playerAIChange = new EventEmitter<boolean>();

  togglePlayerAI() {
    this.playerAI = !this.playerAI;
    this.playerAIChange.emit(this.playerAI);
  }
}
