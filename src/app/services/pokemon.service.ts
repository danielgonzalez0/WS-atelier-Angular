import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly POKEMON_API =
    'https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 2]';
  private readonly http = inject(HttpClient);

  getPokemons(): Observable<any> {
    return this.http.get(this.POKEMON_API);
  }
}
