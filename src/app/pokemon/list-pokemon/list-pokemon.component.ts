import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "../../mock-pokemon-list";
import { Pokemon } from "src/app/pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent implements OnInit {
  pokemons : Pokemon[]
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemonList()
  }
  // pokemons = POKEMONS;

}
