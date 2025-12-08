import { Component } from '@angular/core';
import { StatsCard } from '../../components/stats-card/stats-card';
import { LucideAngularModule } from 'lucide-angular';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-estudos',
  standalone: true,
  imports: [StatsCard, LucideAngularModule, NgFor],
  templateUrl: './estudos.html',
  styleUrl: './estudos.css',
})
export class Estudos {

  studiesKips = [
    { title: 'Total de Horas', value: '156h', icon: 'clock', color: '#4F4655' },
    { title: 'Sessões Realizadas', value: '89', icon: 'book-open', color: '#4F4655' },
    { title: 'Este Mês', value: '42h', icon: 'calendar', color: '#4F4655' },
    { title: 'Média Diária', value: '3.5h', icon: 'medal', color: '#4F4655' },
  ]

}
