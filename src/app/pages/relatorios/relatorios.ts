import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { StatsCard } from '../../components/stats-card/stats-card';
import { StudyEvolutionChart } from '../../components/Reports/study-evolution-chart/study-evolution-chart';
import { SubjectDistributionChart } from '../../components/Reports/subject-distribution-chart/subject-distribution-chart';
import { SubjectHoursChart } from '../../components/Reports/subject-hours-chart/subject-hours-chart';
import { WeeklyProductivityChart } from '../../components/Reports/weekly-productivity-chart/weekly-productivity-chart';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-relatorios',
  imports: [
    LucideAngularModule, 
    StatsCard, 
    StudyEvolutionChart, 
    SubjectDistributionChart, 
    SubjectHoursChart,
    WeeklyProductivityChart,
    NgFor
  ],
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
