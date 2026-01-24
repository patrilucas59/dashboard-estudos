import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

import { statusConfig } from './../../types/status-config';
import { Study } from '../../types/study';

import { StudySessionStorage } from '../../services/study-session-storage/study-session-storage';
import { ActivityCatalog, StudyCatalog, SubjectCatalog } from '../../services/study-catalog/study-catalog';

import { StatsCard } from '../../components/stats-card/stats-card';
import { StudiesTable } from '../../components/studies-table/studies-table';
import { ButtonComponent } from '../../shared/button-component/button-component';
import { StudySessionModal } from '../../shared/study-session-modal/study-session-modal';
import { ToastrService } from 'ngx-toastr';
import { RemoveSessionModal } from '../../shared/remove-session-modal/remove-session-modal';

@Component({
  selector: 'app-estudos',
  standalone: true,
  imports: [
    StudiesTable, 
    StatsCard, 
    LucideAngularModule, 
    NgFor, 
    ButtonComponent, 
    NgIf, 
    StudySessionModal, 
    RemoveSessionModal
  ],
  templateUrl: './estudos.html',
})
export class Estudos implements OnInit {
  statusConfig = statusConfig;

  studies: Study[] = [];

  isSessionModalOpen = false;

  subjects: SubjectCatalog[] = [];
  activities: ActivityCatalog[] = [];

  searchTerm = '';
  activeStatus: Study['status'] | 'todos' = 'todos';

  constructor(
    private storage: StudySessionStorage,
    private catalog: StudyCatalog,
    private toast: ToastrService,
  ) {}

  ngOnInit(): void {
    this.subjects = this.catalog.getSubjects();
    this.activities = this.catalog.getActivities();
    this.loadStudies();
  }

  private loadStudies(): void {
    this.studies = this.storage.getAll();
  }

  get studiesKips() {
    if (!this.studies.length) {
      return [
        { title: 'Total de Horas', value: '0h', icon: 'clock', color: '#2563EB' },
        { title: 'Sessões Totais', value: '0h', icon: 'book-open', color: '#16A34A' },
        { title: 'Este Mês', value: '0h', icon: 'calendar', color: '#F59E0B' },
        { title: 'Média Diária', value: '0h', icon: 'medal', color: '#7C3AED' }
      ]
    }

    const totalMinutes = this.studies.reduce(
      (accumulator, studyMinutes) => accumulator + (studyMinutes.duration ?? 0), 0
    );

    const totalHours = totalMinutes / 60;

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const monthMinutes = this.studies.filter(
      monthStudy => {
        const date = new Date(monthStudy.date);
        return (
          date.getMonth() === currentMonth &&
          date.getFullYear() === currentYear
        );
      })
      .reduce((accumulator, studyMinutes) => accumulator + (studyMinutes.duration ?? 0), 0);

      const uniqueDays = new Set(
        this.studies.map(study => new Date(study.date).toDateString())
      );

      const averageDailyMinutes = uniqueDays.size > 0 ? totalHours / uniqueDays.size : 0;

      return [
        { title: 'Total de Horas', value: `${totalHours.toFixed(1)}h`, icon: 'clock', color: '#2563EB' },
        { title: 'Sessões Totais', value: this.studies.length.toString(), icon: 'book-open', color: '#16A34A' },
        { title: 'Este Mês', value: `${(monthMinutes / 60).toFixed(1)}h`, icon: 'calendar', color: '#F59E0B' },
        { title: 'Média Diária', value: `${averageDailyMinutes.toFixed(1)}h`, icon: 'medal', color: '#7C3AED' }
      ]
  }

  onCreateSession(): void {
    if (this.storage.hasActiveSession()) {
      this.toast.warning('Já existe uma sessão de estudo em andamento.');
      return;
    }
    this.isSessionModalOpen = true;
  }

  onCloseSessionModal(): void {
    this.isSessionModalOpen = false;
  }

  onConfirmSession(data: {
    subject: { name: string };
    activity: { title: string; duration: number };
  }): void {
    const now = new Date();

    const study: Study = {
      id: crypto.randomUUID(),
      subject: data.subject.name,
      topic: data.activity.title,
      date: now.toLocaleDateString('pt-BR'),
      startTime: '0',
      duration: data.activity.duration,
      status: 'em-andamento',
    };

    const dueDate = new Date(now);
    dueDate.setMinutes(dueDate.getMinutes() + data.activity.duration);

    this.storage.add({
      ...study,
      dueDate: dueDate.toISOString(),
    });

    this.loadStudies();
    this.isSessionModalOpen = false;
  }

  isDeleteModalOpen = false;
  studyDeleteId: string | null = null;

  onRequestDeleteStudy(id: string): void {
    this.studyDeleteId = id;
    this.isDeleteModalOpen = true;
  }

  onConfirmDelete(): void {
    if (!this.studyDeleteId) return;

    this.storage.remove(this.studyDeleteId);
    this.loadStudies();

    this.studyDeleteId = null;
    this.isDeleteModalOpen = false;
  }

  onCancelDelete(): void {
    this.studyDeleteId = null;
    this.isDeleteModalOpen = false;
  }

  get filteredStudies(): Study[] {
    return this.studies;
  }
}
