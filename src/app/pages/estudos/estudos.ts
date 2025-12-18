import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

import { statusConfig } from './../../types/status-config';
import { Study } from '../../types/study';

import { StatsCard } from '../../components/stats-card/stats-card';
import { StudiesFilters, StudyStatus } from '../../components/studies-filters/studies-filters';
import { StudiesTable } from '../../components/studies-table/studies-table';

@Component({
  selector: 'app-estudos',
  standalone: true,
  imports: [StudiesTable, StudiesFilters, StatsCard, LucideAngularModule, NgFor],
  templateUrl: './estudos.html',
  styleUrl: './estudos.css',
})
export class Estudos {
  statusConfig = statusConfig;

  studiesKips = [
    { title: 'Total de Horas', value: '156h', icon: 'clock', color: '#2563EB' },
    { title: 'Sessões Totais', value: '89', icon: 'book-open', color: '#16A34A' },
    { title: 'Este Mês', value: '42h', icon: 'calendar', color: '#F59E0B' },
    { title: 'Média Diária', value: '3.5h', icon: 'medal', color: '#7C3AED' },
  ];

  searchTerm = '';
  activeStatus: StudyStatus = 'todos';

  private statusPriority: Record<Study['status'], number> = {
    'em-andamento': 1,
    'planejado': 2,
    'concluido': 3,
  };

  studies: Study[] = [
    {
      id: '1',
      subject: 'Língua Portuguesa',
      topic: 'Carlos Drummond de Andrade',
      date: '20/10/2025',
      startTime: '14:00',
      duration: '45min',
      status: 'concluido',
      color: 'bg-blue-500',
    },
    {
      id: '2',
      subject: 'Matemática',
      topic: 'Cálculo Integral - Métodos de Integração',
      date: '21/10/2025',
      startTime: '10:00',
      duration: '1h 45min',
      status: 'concluido',
      color: 'bg-violet-500',
    },
    {
      id: '3',
      subject: 'Biologia',
      topic: 'Hermafroditas',
      date: '22/10/2025',
      startTime: '16:00',
      duration: '60min',
      status: 'concluido',
      color: 'bg-green-500',
    },
    {
      id: '4',
      subject: 'História',
      topic: 'Revolução Industrial - Inglaterra',
      date: '23/10/2025',
      startTime: '09:00',
      duration: '1h 20min',
      status: 'concluido',
      color: 'bg-amber-500',
    },
    {
      id: '5',
      subject: 'Química',
      topic: 'Reações Orgânicas',
      date: '24/10/2025',
      startTime: '18:30',
      duration: '1h 30min',
      status: 'em-andamento',
      color: 'bg-blue-500',
    },
    {
      id: '6',
      subject: 'Inglês',
      topic: 'Advanced Grammar - Conditionals',
      date: '25/10/2025',
      startTime: '15:00',
      duration: '1h 00min',
      status: 'planejado',
      color: 'bg-pink-500',
    },
    {
      id: '7',
      subject: 'Física',
      topic: 'Termodinâmica - Leis',
      date: '28/10/2025',
      startTime: '19:00',
      duration: '2h 00min',
      status: 'planejado',
      color: 'bg-violet-500',
    },
  ];

  get filteredStudies(): Study[] {
    const search = this.searchTerm.toLowerCase().trim();

    return this.studies
      .filter((s) => {
        const matchesStatus =
          this.activeStatus === 'todos' || s.status === this.activeStatus;

        const matchesSearch =
          !search ||
          s.subject.toLowerCase().includes(search) ||
          s.topic.toLowerCase().includes(search);

        return matchesStatus && matchesSearch;
      })
      .sort(
        (a, b) =>
          this.statusPriority[a.status] - this.statusPriority[b.status]
      );
  }
}
