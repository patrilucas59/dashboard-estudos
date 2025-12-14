import { LucideAngularModule } from 'lucide-angular';
import { Component } from '@angular/core';
import { ReportsLevelCard } from '../../components/reports-level-card/reports-level-card';
import { Rank, RANKS } from '../../types/ranking';
import { CommonModule } from '@angular/common';
import { ReportProgressOverview } from '../../components/report-progress-overview/report-progress-overview';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ReportsLevelCard, ReportProgressOverview],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.css',
})
export class Relatorios {

  userXP = 1820;

  getRankByXP(experience: number): Rank {
    return (
    RANKS.find(rank => experience >= rank.min && experience <= rank.max) ?? 
    RANKS[0]
  )
};

  get rank() {
    return this.getRankByXP(this.userXP)
  }

  get level() {
    return Math.floor(this.userXP / 500);
  }

  weeklyXP = 420;
  monthlyXP = 1380;
}
