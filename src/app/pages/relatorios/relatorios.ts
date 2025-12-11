import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { StatsCard } from '../../components/stats-card/stats-card';

@Component({
  selector: 'app-relatorios',
  imports: [LucideAngularModule, StatsCard, NgFor],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.css',
})
export class Relatorios {

  reportKips = [
    { title: 'Horas estudadas', value: '125h', icon: 'clock', color: '#3B82F6' },
    { title: 'Sessões realizadas', value: '42', icon: 'book-open', color: '#10B981' },
    { title: 'Metas concluídas', value: '85%', icon: 'goal', color: '#F59E0B' },
    { title: 'Dia de sequência', value: '12', icon: 'flame', color: '#8B5CF6' }
  ]
}
