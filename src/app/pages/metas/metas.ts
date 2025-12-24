import { filter } from 'rxjs';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { StatsCard } from '../../components/stats-card/stats-card';
import { StudiesFilters } from '../../components/studies-filters/studies-filters';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [CourseCard, StudiesFilters, StatsCard, LucideAngularModule, NgFor],
  templateUrl: './metas.html',
})
export class Metas {
  historicGoals = [
    { title: 'Metas ativas', value: '12', icon: 'goal', color: '#3B82F6' },
    { title: 'Concluídas', value: '8', icon: 'check-circle-2', color: '#10B981' },
    { title: 'Em progresso', value: '4', icon: 'trending-up', color: '#F59E0B' },
    { title: 'Este mês', value: '3', icon: 'calendar', color: '#8B5CF6' },
  ]

  goals = [
    { 
      title: 'Estudar 100 horas de Matemática', 
      subtitle: 'Completar módulos de cálculo e álgebra linear', 
      progress: 75,
      iconGoal: 'target', 
      currentHours: 75, 
      totalHours: 100, 
      successRate: 82, 
      subject: 'Matemática', 
      priority: 'Alta'
    },
    { 
      title: 'Resolver 50 questões de Física', 
      subtitle: 'Praticar exercícios de mecânica e termodinâmica', 
      progress: 20,
      iconGoal: 'target', 
      currentHours: 4, 
      totalHours: 20, 
      successRate: 66, 
      subject: 'Física', 
      priority: 'Média'
    },
    { 
      title: 'Ler Memória Póstumas de Brás Cubas em 3 dias', 
      subtitle: 'Cumprir a leitura do livro e fazer um resumo de toda a história', 
      progress: 40,
      iconGoal: 'target', 
      currentHours: 5, 
      totalHours: 72, 
      successRate: 63, 
      subject: 'Literatura', 
      priority: 'Alta'
    },
    {
      title: 'Estudar 30 horas de Programação',
      subtitle: 'Lógica e estruturas de dados',
      progress: 40,
      iconGoal: 'target',
      currentHours: 12,
      totalHours: 30,
      successRate: 74,
      subject: 'Programação',
      priority: 'alta'
    }
  ]

  goalSearchTerm = '';

  get filteredGoals() {
    const search = this.goalSearchTerm.toLowerCase().trim();

    return this.goals.filter(goal => 
      !search || goal.title.toLowerCase().includes(search)
    )
  }
}
