import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
  imports: [],
})
export class ProgressBar {

  @Input() value: number = 0;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: string = 'bg-blue-500';
  @Input() progress: number = 0;

  get sizeClass() {
    return {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-3.5',
    }[this.size]
  }
}
