import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit () {
    console.table(this.pokemonList);  
  }
  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemonId);

    if(pokemon) {
      console.log(`vous avez demandé le ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vos avez demandé un pokémon qi n'existe pas.`);
      this.pokemonSelected = pokemon
    }
  }

  // selectPokemon(event: MouseEvent) {
  //   const index: number = +(event.target as HTMLInputElement).value;
  //   console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`)
  // }
}
