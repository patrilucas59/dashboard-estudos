import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-progress-overview',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './report-progress-overview.html',
  styleUrl: './report-progress-overview.css',
})
export class ReportProgressOverview {

  @Input() totalXP = 0;
  @Input() weeklyXP = 0;
  @Input() monthlyXP = 0;

  get trend(): 'up' | 'stable' | 'down' {
    if (this.weeklyXP > this.monthlyXP / 4) return 'up';
    if (this.weeklyXP === 0) return 'down';
    return 'stable'
  }
}
