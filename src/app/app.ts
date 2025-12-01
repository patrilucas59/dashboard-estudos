import { Component, signal } from '@angular/core';
import { Hello } from './hello/hello';

@Component({
  selector: 'app-root',
  imports: [Hello],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('dashboard-estudos');
}
