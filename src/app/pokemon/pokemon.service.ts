import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, catchError, tap, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';

// le service a été injecté depuis le pokemon.module
@Injectable({
   providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient){}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error => this.handleError(error, undefined)))
    );
  }

  updatePokemon(pokemon: Pokemon):Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log( response: any ) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.table(error);
    return of(errorValue)
  }

  // getPokemonList(): Pokemon[] {
  //   return POKEMONS;
  // }

  // getPokemonById(pokemonId: number): Pokemon | undefined {
  //   return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  // }

  getPokemonTypeList(): string [] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
