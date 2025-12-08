import { statusConfig } from './../../types/status-config';
import { Study } from './../../types/study';
import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-studies-table',
  standalone: true,
  imports: [NgClass, NgFor, LucideAngularModule],
  templateUrl: './studies-table.html',
  styleUrl: './studies-table.css',
})
export class StudiesTable {
  @Input() studies: Study[] = [];
  @Input() statusConfig = statusConfig;
}