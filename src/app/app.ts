import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [
    Navbar, 
    RouterOutlet,
    LucideAngularModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('dashboard-estudos');
}
