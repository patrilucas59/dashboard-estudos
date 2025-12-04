import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [LucideAngularModule, NgClass],
  templateUrl: './course-card.html',
  providers: [],
})
export class CourseCard {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() time: string = '';
  @Input() updated: string = '';
  @Input() status: string = '';
  @Input() color?: string = '#4B7BFF';
}