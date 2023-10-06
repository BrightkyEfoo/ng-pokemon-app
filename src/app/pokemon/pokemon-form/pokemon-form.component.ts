import { Component, Input, OnInit } from "@angular/core";
import { Pokemon } from "src/app/pokemon";
import { PokemonService } from "../pokemon.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styles: [],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(private pokemonService: PokemonService, private router: Router) {}
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  onSubmit(): void {
    let x = 2
    console.log("submit form!" + x);
    this.router.navigate(["/pokemons", this.pokemon.id]);
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }
  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types = this.pokemon.types.filter((el) => el !== type);
    } else {
      this.pokemon.types.push(type);
    }
  }

  isTypesValid(type: string) {
    return this.types.includes(type);
  }
}
