import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ArcElement, Chart, ChartData, ChartOptions, Legend, Tooltip } from 'chart.js';
import { LucideAngularModule } from 'lucide-angular';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-subject-distribution-chart',
  standalone: true,
  imports: [BaseChartDirective, LucideAngularModule, NgFor],
  templateUrl: './subject-distribution-chart.html',
  styleUrl: './subject-distribution-chart.css',
})
export class SubjectDistributionChart {

  data = [
    { name: 'Matemática', value: 25, color: '#3b82f6' },
    { name: 'Física', value: 25, color: '#8b5cf6' },
    { name: 'Biologia', value: 20, color: '#10b981' },
    { name: 'Química', value: 15, color: '#f59e0b' },
    { name: 'Literatura', value: 5, color: '#64748b' },
  ];

  chartData: ChartData<'pie'> = {
    labels: this.data.map(d => d.name),
    datasets: [
      {
        data: this.data.map(d => d.value),
        backgroundColor: this.data.map(d => d.color),
        borderWidth: 0,
        hoverOffset: 8,
      }
    ]
  };

  chartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: 'white',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        titleColor: '#334115',
        bodyColor: '#334115',
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (ctx) => `${ctx.raw}%`,
        },
      },
      legend: {
        display: false
      }
    }
  }
}
