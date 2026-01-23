import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-modal.html',
})
export class ConfirmModal {

  constructor(private toastr: ToastrService) {}

  @Input() title = 'Confirmação';
  @Input() message = 'Tem certeza que deseja excluir essa sessão?';

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm(): void {
    this.confirm.emit();
    this.toastr.success('Sessão excluída com sucesso!');
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
