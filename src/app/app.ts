import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { Header } from './shared/header/header';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    RouterOutlet,
    LucideAngularModule,
    Header,
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dashboard-estudos');

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Seus dados foram atualizados!');
  }

  showError() {
    this.toastr.error('Erro ao salvar seus dados!');
  }
}
