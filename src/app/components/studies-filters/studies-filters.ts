import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-studies-filters',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './studies-filters.html',
  styleUrl: './studies-filters.css',
})
export class StudiesFilters {
  @Input() variant: 'studies' | 'goals' = 'studies';

  activeFilter = 'todas';

  filters = [
    { id: 'todas', label: 'Todas' },
    { id: 'ativas', label: 'Ativas' },
    { id: 'concluidas', label: 'Concluídas' },
    { id: 'atrasadas', label: 'Atrasadas' },
  ]
}
