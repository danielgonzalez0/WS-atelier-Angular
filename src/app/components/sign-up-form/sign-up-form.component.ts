import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {

  //attributs
  isSubmitted: boolean = false;
  formBuilder: FormBuilder = inject(FormBuilder);
  signUpForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
  }) as FormGroup;

//méthodes
  isFieldInError(field: string): boolean {
    const control = this.signUpForm.controls[field];
    if (control.invalid && control.dirty) return true;
    if (control.invalid && control.touched) return true;
    if (control.invalid && this.isSubmitted) return true;
    return false;
  }

  getFirstNameError(field: AbstractControl): string {
    if (field.errors?.['required']) return 'First Name is required';
    if (field.errors?.['minlength'])
      return 'First Name must be at least 2 characters';
    return '';
  }

  getLastNameError(field: AbstractControl): string {
    if (field.errors?.['required']) return 'Last Name is required';
    if (field.errors?.['minlength'])
      return 'Last Name must be at least 2 characters';
    return '';
  }

  getEmailError(field: AbstractControl): string {
    if (field.errors?.['required']) return 'Email is required';
    if (field.errors?.['email']) return 'Invalid email address';
    return '';
  }

  handleFieldErrors(fieldName: string): string {
    
    const field = this.signUpForm.controls[fieldName];
    if (this.isFieldInError(fieldName)) {
      switch (fieldName) {
        case 'firstName':
          return this.getFirstNameError(field);
        case 'lastName':
          return this.getLastNameError(field);
        case 'email':
          return this.getEmailError(field);
        // Ajoutez d'autres champs ici si nécessaire
        default:
          return '';
      }
    }
    return '';
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.signUpForm.valid) {
      console.log('form submitted with: ', this.signUpForm.value);
    }
  }
}
