import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ProgressBar } from '../progress-bar/progress-bar';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf, LucideAngularModule, NgClass, ProgressBar],
  templateUrl: './course-card.html',
})
export class CourseCard {
  @Input() variant: 'default' | 'goal' = 'default';

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() time: string = '';
  @Input() updated: string = '';
  @Input() status!: string;
  @Input() iconGoal!: string;
  @Input() progress!: number;
  @Input() currentHours!: number;
  @Input() totalHours!: number;
  @Input() successRate!: number;
  @Input() subject!: string;
  @Input() priority!: string;
}
