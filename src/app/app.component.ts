import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { BtnStyle } from './models/buttons.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularAtelier';

  buttons: BtnStyle[] = [
    { title: 'bouton A', color: 'white', bgColor: 'blue' },
    { title: 'bouton B', color: 'white', bgColor: 'green' },
    { title: 'bouton C', color: 'white', bgColor: 'red' },
    { title: 'bouton D', color: 'black', bgColor: 'yellow' },
    { title: 'bouton E', color: 'white', bgColor: 'black' },
  ];

  displayTitleOfChild(button: BtnStyle) {
    console.log(
      `j'ai cliqué sur le ${button.title} qui est de couleur: ${button.bgColor}`
    );
  }
}
