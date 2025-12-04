import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.css',
})
export class StatsCard {

  @Input() title: string = ''; // Nome da métrica (horas estudadas)
  @Input() value: string | number = ''; // Valor atual (12h)
  @Input() icon: string = ''; // Ícone (lucide)
  @Input() color: string = '#4B7BFF'; // Cor do card
  @Input() description?: string; // Descrição opicional
}