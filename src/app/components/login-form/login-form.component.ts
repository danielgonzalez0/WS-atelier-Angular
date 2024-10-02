import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from '../../models/Login.model';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule, NgStyle],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  login: Login = {
    email: '',
    password: '',
  };

  formSubmittedWithSuccess: boolean = false;
  timeoutFn: ReturnType<typeof setTimeout> | null = null;

  onReset(form: NgForm) {
    this.formSubmittedWithSuccess = false;
    if (this.timeoutFn) {
      clearTimeout(this.timeoutFn);
      this.timeoutFn = null;
    }
    form.resetForm();
    console.log('Form Reset');
  }

  onsubmit(form: NgForm) {
  
    if (form.valid) {
      console.log('Form Submitted', form.value);
      this.formSubmittedWithSuccess = true;
      this.timeoutFn = setTimeout(() => {
        this.onReset(form);
      }, 3000);
    }
  }

 
  

}
