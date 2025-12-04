import { Component } from '@angular/core';
import { StatsCard } from '../../components/stats-card/stats-card';
import { LucideAngularModule } from 'lucide-angular';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatsCard, CourseCard, LucideAngularModule],
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
      progress: 65,
      status: 'Em andamento,'
    },
    {
      title: 'História',
      subtitle: 'Segunda Guerra Mundial',
      progress: 20,
      status: 'Pendente',
    }
  ];

  nextActivities = [
    {
      subject: 'Física',
      description: 'Primeira Lei de Newton',
      dueDate: new Date(),
    }
  ];
}
