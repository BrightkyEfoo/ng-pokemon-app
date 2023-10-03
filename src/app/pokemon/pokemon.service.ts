import { Injectable } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pokemon-list";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getpokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find((pok) => pok.id === id);
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fee",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
