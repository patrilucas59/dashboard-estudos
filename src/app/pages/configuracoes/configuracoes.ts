import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserProfileService } from '../../services/user-profile.service';
import { LucideAngularModule } from 'lucide-angular';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [LucideAngularModule, NgIf, ReactiveFormsModule],
  templateUrl: './configuracoes.html',
  styleUrls: ['./configuracoes.css']
})
export class Configuracoes implements OnInit {
  profileForm!: FormGroup;
  isEditing = false;

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const profile = this.userProfileService['_profile$'].getValue();

    this.profileForm = this.fb.group({
      fullName: [{ value: profile?.fullName || '', disabled: true }, Validators.required],
      email: [{ value: profile?.email || '', disabled: true }, [Validators.required, Validators.email]],
      phone: [{ value: profile?.phone || '', disabled: true }],
      location: [{ value: profile?.location || '', disabled: true }],
      birthDate: [{ value: profile?.birthDate || '', disabled: true }],
      bio: [{ value: profile?.bio || '', disabled: true }],
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.isEditing ? this.profileForm.enable() : this.profileForm.disable();
  }

  saveProfile() {
    if (this.profileForm.valid) {
      try {
        this.userProfileService.saveProfile(this.profileForm.getRawValue());
        this.toastr.success('Seus dados foram atualizados!');
        this.profileForm.disable();
        this.isEditing = false;
      } catch (error) {
        this.toastr.error('Erro ao salvar seus dados!');
      }
    } else {
      this.toastr.error('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  onlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D+/g, '');
    this.phone.setValue(input.value, { emitEvent: false })
  }

  formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 11)

    if (digits.length <= 10) {
      return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const formatted = this.formatPhone(input.value);
    this.phone.setValue(formatted, { emitEvent: false });
  }

  // getters para template
  get fullName(): FormControl { return this.profileForm.get('fullName') as FormControl; }
  get email(): FormControl { return this.profileForm.get('email') as FormControl; }
  get phone(): FormControl { return this.profileForm.get('phone') as FormControl; }
  get location(): FormControl { return this.profileForm.get('location') as FormControl; }
  get birthDate(): FormControl { return this.profileForm.get('birthDate') as FormControl; }
  get bio(): FormControl { return this.profileForm.get('bio') as FormControl; }
}
