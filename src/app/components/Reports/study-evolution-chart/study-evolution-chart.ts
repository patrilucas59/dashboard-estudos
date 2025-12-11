import { BaseChartDirective } from 'ng2-charts';
import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions, registerables } from 'chart.js'
import { LucideAngularModule } from 'lucide-angular';

Chart.register(...registerables);

@Component({
  selector: 'app-study-evolution-chart',
  standalone: true,
  imports: [LucideAngularModule, BaseChartDirective],
  templateUrl: './study-evolution-chart.html',
  styleUrl: './study-evolution-chart.css',
})
export class StudyEvolutionChart {

  data = [
    { date: '01 Dez', hours: 4, meta: 6 },
    { date: '02 Dez', hours: 5, meta: 6 },
    { date: '03 Dez', hours: 3, meta: 6 },
    { date: '04 Dez', hours: 7, meta: 6 },
    { date: '05 Dez', hours: 6, meta: 6 },
    { date: '06 Dez', hours: 8, meta: 6 },
    { date: '07 Dez', hours: 5, meta: 6 },
    { date: '08 Dez', hours: 6, meta: 6 },
    { date: '09 Dez', hours: 7, meta: 6 },
    { date: '10 Dez', hours: 9, meta: 6 },
    { date: '11 Dez', hours: 8, meta: 6 }
  ];

  labels = this.data.map(d => d.date);

  hoursData = this.data.map(d => d.hours);
  goalData = this.data.map(d => d.meta);

  chartConfig: ChartConfiguration<'line'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        label: 'Meta Diária',
        data: this.goalData,
        borderColor: '#cbd5e1',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
      },
      {
        label: 'Horas Estudadas',
        data: this.hoursData,
        borderColor: '#3b82f6',
        borderWidth: 2,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return undefined;

          const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
          gradient.addColorStop(0, 'blue');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          return gradient;
        },
        pointBackgroundColor: '#3b82f6',
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ]
  };
  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: '#64748b', font: { size: 12 } },
        title: {
          display: true,
          text: 'Horas',
          color: '#64748b',
          font: { size: 12 }
        },
        grid: { tickBorderDash: [3, 3], color: '#e2e8f0' }
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
      },
      legend: { display: false }
    }
  }

}
