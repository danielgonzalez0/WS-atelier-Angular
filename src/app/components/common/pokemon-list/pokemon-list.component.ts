import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemonList: any[] = []
  readonly pokemonService = inject(PokemonService);
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.pokemonService
      .getPokemons()
      .subscribe((response: any) => {
        console.log('response', response.data);
        this.pokemonList = response.data;
        console.log('pkemonList', this.pokemonList);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
