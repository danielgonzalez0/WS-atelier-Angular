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

  submitted: boolean = false;
  formSubmittedWithSuccess: boolean = false;
  timeoutFn: ReturnType<typeof setTimeout> | null = null;

  onReset(form: NgForm) {
    this.submitted = false;
    this.formSubmittedWithSuccess = false;
    if (this.timeoutFn) {
      clearTimeout(this.timeoutFn);
      this.timeoutFn = null;
    }
    form.resetForm();
    console.log('Form Reset');
    console.log(this.submitted);
    console.log(this.formSubmittedWithSuccess);
  }

  logInputStates(form: NgForm) {
    const passwordControl = form.controls['password'];
    console.log('Password Control State:', {
      dirty: passwordControl.dirty,
      touched: passwordControl.touched,
      valid: passwordControl.valid,
      pristine : passwordControl.pristine,
      errors: passwordControl.errors,
    });
  }

  onsubmit(form: NgForm) {
    this.submitted = true;
          this.logInputStates(form);
    if (form.valid) {
      console.log('Form Submitted', form.value);
      this.formSubmittedWithSuccess = true;
       this.logInputStates(form);
      this.timeoutFn = setTimeout(() => {
        this.onReset(form);
         this.logInputStates(form);
      }, 3000);
    }
  }

 
  

}
