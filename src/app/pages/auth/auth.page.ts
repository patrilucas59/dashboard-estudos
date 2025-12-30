import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { LoginForm } from '../../components/login-form/login-form';
import { RegisterForm } from '../../components/register-form/register-form';
import { AuthOverlay } from '../../components/auth-overlay/auth-overlay';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, LoginForm, RegisterForm, AuthOverlay],
  templateUrl: './auth.page.html',
})
export class AuthPage {
  mode: AuthMode = 'login';

  switchToLogin() {
    this.mode = 'login';
  }

  switchToRegister() {
    this.mode = 'register';
  }
}