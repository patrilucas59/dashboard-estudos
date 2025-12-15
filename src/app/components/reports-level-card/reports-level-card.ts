import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Rank } from '../../types/ranking';

@Component({
  selector: 'app-reports-level-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ProgressBar, NgClass, NgIf],
  templateUrl: './reports-level-card.html',
  styleUrl: './reports-level-card.css',
})
export class ReportsLevelCard {

  @Input({ required: true }) rank!: Rank;
  @Input() level: number = 1;
  @Input() currentXP = 0;

  @Input() title = 'Progresso do Estudante';
  @Input() gradient = 'from-blue-500 to-purple-600';
  @Input() icon: string = 'crown';
  @Input() showProgress = true;
  @Input() progressColor: string = 'bg-blue-400'

  get nextLevelXP(): number {
    return this.rank.max;
  }

  get xpProgress(): number {
    return Math.min(
      ((this.currentXP - this.rank.min) /
        (this.rank.max - this.rank.min)) * 100,
      100
    );
  }

  get missingXP(): number {
    return Math.max(this.rank.max - this.currentXP, 0);
  }
}
