import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { SignUpFormComponent } from "./components/sign-up-form/sign-up-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormComponent, SignUpFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularAtelier';
}
