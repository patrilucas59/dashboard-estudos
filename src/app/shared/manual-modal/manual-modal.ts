import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-manual-modal',
  standalone: true,
  imports: [NgIf, LucideAngularModule],
  templateUrl: './manual-modal.html',
  styleUrl: './manual-modal.css',
})
export class ManualModal {

  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
