import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export type StudyStatus = 'concluido' | 'em-andamento' | 'planejado' | 'todos';

@Component({
  selector: 'app-studies-filters',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './studies-filters.html',
  styleUrl: './studies-filters.css',
})
export class StudiesFilters {
  @Input() variant: 'studies' | 'goals' = 'studies';

  @Output() searchChange = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<StudyStatus>();

  searchTerm = '';
  activeStatus: StudyStatus = 'todos';

  onSearch(value: string) {
    this.searchTerm = value;
    this.searchChange.emit(value);
  }

  onStatusSelect(status: StudyStatus) {
    this.activeStatus = status;
    this.statusChange.emit(status);
  }
}
