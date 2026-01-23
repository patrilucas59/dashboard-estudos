import { statusConfig } from './../../types/status-config';
import { Study } from './../../types/study';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-studies-table',
  standalone: true,
  imports: [NgClass, NgFor, LucideAngularModule, NgIf],
  templateUrl: './studies-table.html',
})
export class StudiesTable {
  @Input() studies: Study[] = [];
  @Input() statusConfig = statusConfig;

  @Output() delete = new EventEmitter<string>();

  openMenuId: string | null = null;

  toggleMenu(id: string) {
    this.openMenuId = this.openMenuId === id ? null : id;
  }

  clearMenu() {
    this.openMenuId = null;
  }

  onDelete(id: string) {
    this.delete.emit(id);
    this.clearMenu();
  }
}