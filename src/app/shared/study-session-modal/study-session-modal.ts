import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';

export interface Subject {
  id: string;
  name: string;
}

export interface StudyActivity {
  id: string;
  subjectId: string;
  title: string;
  duration: number; // tempo estimado
}

@Component({
  selector: 'app-study-session-modal',
  standalone: true,
  imports: [NgFor, FormsModule, LucideAngularModule],
  templateUrl: './study-session-modal.html',
})
export class StudySessionModal {
  isOpen = false;

  @Input() subjects: Subject[] = [];
  @Input() activities: StudyActivity[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{
    subject: Subject;
    activity: StudyActivity;
  }>();

  constructor(
    private toast: ToastrService
  ) {}
  

  selectedSubject?: Subject;
  selectedActivity?: StudyActivity;

  get filteredActivities(): StudyActivity[] {
    if (!this.selectedSubject) return [];
    return this.activities.filter(
      activity => activity.subjectId === this.selectedSubject!.id
    );
  } 

  onConfirm() {
    if (!this.selectedSubject || !this.selectedActivity) return;

    this.confirm.emit({
      subject: this.selectedSubject,
      activity: this.selectedActivity,
    });
    this.toast.success('Sessão de estudo iniciada com sucesso!')
  }

  onClose() {
    this.close.emit();
  }
}