import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [LucideAngularModule, NgClass],
  templateUrl: './course-card.html',
})
export class CourseCard {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() time: string = '';
  @Input() updated: string = '';
  @Input() status!: string;
}
