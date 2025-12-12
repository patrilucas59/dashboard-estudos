import { Component } from '@angular/core';
import { BarElement, CategoryScale, Chart, ChartData, ChartOptions, Legend, LinearScale, Tooltip } from 'chart.js';
import { LucideAngularModule } from 'lucide-angular';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-weekly-productivity-chart',
  standalone: true,
  imports: [BaseChartDirective, LucideAngularModule],
  templateUrl: './weekly-productivity-chart.html',
  styleUrl: './weekly-productivity-chart.css',
})
export class WeeklyProductivityChart {

  data = [
    { day: 'Dom', hours: 4 },
    { day: 'Seg', hours: 8 },
    { day: 'Ter', hours: 6 },
    { day: 'Qua', hours: 7.5 },
    { day: 'Qui', hours: 7 },
    { day: 'Sex', hours: 6 },
    { day: 'Sáb', hours: 5 }
  ];

  chartData: ChartData<'bar'> = {
    labels: this.data.map(d => d.day),
    datasets: [
      {
        data: this.data.map(d => d.hours),
        backgroundColor: '#8b5cf6',
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#64748b', font: { size: 12 } },
        grid: {
          color: '#e2e8f0',
          tickBorderDash: [3, 3],
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
        }
      },
      y: {
        ticks: {
          color: '#64748b',
          font: { size: 12 },
          callback: (value) => value + 'h',
        },
        title: {
          display: true,
          text: 'Horas',
          color: '#6478b',
          font: { size: 13 },
        },
        grid: {
          color: '#e2e8f0',
          tickBorderDash: [3, 3],
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'white',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        titleColor: '#334155',
        bodyColor: '#334155',
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (ctx) => `${ctx.raw}h`,
        },
      },
    }
  };
}
