import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-overlay.html',
})
export class AuthOverlay {
  @Input({ required: true }) mode!: AuthMode;

  @Output() login = new EventEmitter<void>();
  @Output() register = new EventEmitter<void>();
}
