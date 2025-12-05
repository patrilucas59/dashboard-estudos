import { Component } from '@angular/core';
import { StatsCard } from '../../components/stats-card/stats-card';
import { LucideAngularModule } from 'lucide-angular';
import { CourseCard } from '../../components/course-card/course-card';
import { ProgressBar } from '../../components/progress-bar/progress-bar';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StatsCard,
    CourseCard,
    LucideAngularModule,
    ProgressBar,
    NgFor,
    DatePipe
  ],
  templateUrl: './home.html',
})

export class Home {

  kpis= [
    { title: 'Horas Estudadas', value: '12h', icon: 'clock' },
    { title: 'Matérias Concluídas', value: 3, icon: 'check-circle' },
    { title: 'Progresso semanal', value: '64%', icon: 'line-chart' },
    { title: 'Frequência', value: '4 dias', icon: 'calendar' },
  ];

  recentStudies = [
    {
      title: 'Matemática',
      subtitle: 'Logaritmos',
      time: '2h 45m',
      updated: 'Hoje',
      status: 'Em andamento'
    },
    {
      title: 'História',
      subtitle: 'Segunda Guerra Mundial',
      time: '1h 20m',
      updated: 'Ontem',
      status: 'Pendente',
    }
  ];

  nextActivities = [
    {
      title: 'Física',
      subtitle: 'Primeira Lei de Newton',
      dueDate: new Date(),
    }
  ];
}
