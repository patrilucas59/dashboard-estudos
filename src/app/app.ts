import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LucideAngularModule,
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
