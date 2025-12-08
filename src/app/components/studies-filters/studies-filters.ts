import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-studies-filters',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './studies-filters.html',
  styleUrl: './studies-filters.css',
})
export class StudiesFilters {}
