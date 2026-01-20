import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularComponent, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [NgClass, LucideAngularModule],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {

  @Input() label = '';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() icon?: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;

  get buttonClasses(): string {
    const baseClasses = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return baseClasses[this.variant];
  }
}
