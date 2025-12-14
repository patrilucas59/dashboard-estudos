import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export interface TimelineItems {
    date: string;
    title: string;
    description?: string;
    xp: number;
    icon?: string;
}

@Component({
  selector: 'app-report-timeline',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, LucideAngularModule],
  templateUrl: './report-timeline.html',
  styleUrl: './report-timeline.css',
})
export class ReportTimeline {

  @Input() title: string = 'Evolução Constante';
  @Input() items: TimelineItems[] = [];
}
