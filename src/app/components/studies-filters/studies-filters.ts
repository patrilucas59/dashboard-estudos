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

  @Input() resultsCount = 0;
  @Input() searchQuery = '';
  @Input() emptyMessage = 'Nenhum resultado encontrado';

  @Output() searchChange = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<StudyStatus>();

  activeStatus: StudyStatus = 'todos';

  onSearch(value: string) {
    this.searchChange.emit(value);
  }

  onStatusSelect(status: StudyStatus) {
    this.activeStatus = status;
    this.statusChange.emit(status);
  }
}
