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
  @Input() currentXP: number = 0;
  @Input() nextLevelXP: number = 100;

  @Input() title: string = 'Progresso do Estudante';
  @Input() gradient: string = 'from-blue-500 to-purple-600';
  @Input() icon: string = 'crown';
  @Input() showProgress: boolean = true;
  @Input() progressColor: string = 'bg-blue-400';

  get xpProgress() {
    return (this.currentXP / this.nextLevelXP) * 100;
  }

  get missingXP() {
    return this.nextLevelXP - this.currentXP;
  }
}
