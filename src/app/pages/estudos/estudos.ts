import { StudySessionStorage } from './../../services/study-session-storage';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

import { statusConfig } from './../../types/status-config';
import { Study } from '../../types/study';

import { StatsCard } from '../../components/stats-card/stats-card';
import { StudyStatus } from '../../components/studies-filters/studies-filters';
import { StudiesTable } from '../../components/studies-table/studies-table';
import { ButtonComponent } from '../../shared/button-component/button-component';

@Component({
  selector: 'app-estudos',
  standalone: true,
  imports: [StudiesTable, StatsCard, LucideAngularModule, NgFor, ButtonComponent],
  templateUrl: './estudos.html',
})
export class Estudos {
  statusConfig = statusConfig;

  studiesKips = [
    { title: 'Total de Horas', value: '156h', icon: 'clock', color: '#2563EB' },
    { title: 'Sessões Totais', value: '89', icon: 'book-open', color: '#16A34A' },
    { title: 'Este Mês', value: '42h', icon: 'calendar', color: '#F59E0B' },
    { title: 'Média Diária', value: '3.5h', icon: 'medal', color: '#7C3AED' },
  ];

  studies: Study[] = [];

  constructor(
    private studySessionStorage: StudySessionStorage
  ) {}

  ngInit(): void {
    this.loadStudies();
  }

  private loadStudies(): void {
    const sessions = this.studySessionStorage.getAll();

    this.studies = sessions.map(session => ({
      id: session.id,
      subject: session.subject,
      topic: session.topic,
      dueDate: session.dueDate,
      date: (session.date),
      startTime: session.startTime,
      duration: session.duration ? `${session.duration} min` : 'N/A',
      status: session.status,
    }));
  }

  searchTerm = '';
  activeStatus: StudyStatus = 'todos';

  private statusPriority: Record<Study['status'], number> = {
    'em-andamento': 1,
    'planejado': 2,
    'concluido': 3,
  };

  onCreateSession() {
    console.log('Criar nova sessão de estudos')
  }

  get filteredStudies(): Study[] {
    return this.studies;
  }
}
