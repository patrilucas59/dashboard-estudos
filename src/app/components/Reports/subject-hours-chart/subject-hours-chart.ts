import { Component } from '@angular/core';
import { BarElement, CategoryScale, Chart, ChartData, ChartOptions, Legend, LinearScale, Tooltip } from 'chart.js';
import { LucideAngularModule } from 'lucide-angular';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-subject-hours-chart',
  standalone: true,
  imports: [LucideAngularModule, BaseChartDirective],
  templateUrl: './subject-hours-chart.html',
  styleUrl: './subject-hours-chart.css',
})
export class SubjectHoursChart {

  data = [
    { subject: 'Matemática', hours: 40 },
    { subject: 'Física', hours: 30 },
    { subject: 'Biologia', hours: 25 },
    { subject: 'Química', hours: 18 },
    { subject: 'Literatura', hours: 12 },
  ];

  chartData: ChartData<'bar'> = {
    labels: this.data.map(d => d.subject),
    datasets: [
      {
        data: this.data.map(d => d.hours),
        backgroundColor: '#3b82f6',
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          color: '#e2e8f0',
          tickBorderDash: [3, 3]
        },
        ticks: {
          color: '#64748b',
          font: { size: 12 },
          callback: (value) => value + 'h'
        }
      },
      y: {
        grid: { display: false },
        ticks: {
          color: '#64748b',
          font: { size: 12 }
        }
      }
    },
    plugins: {
      tooltip: {
        backgroundColor: 'white',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        titleColor: '#334155',
        bodyColor: '#334155',
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (ctx) => `${ctx.raw}h`
        }
      },
      legend: { display: false }
    }
  };
}
