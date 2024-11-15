import { Component } from '@angular/core';
import { HeaderComponent } from "./components/common/header/header.component";
import { PokemonListComponent } from "./components/common/pokemon-list/pokemon-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularAtelier';
}
