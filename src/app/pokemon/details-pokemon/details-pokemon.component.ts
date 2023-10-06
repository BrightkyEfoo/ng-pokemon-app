import { PokemonService } from "./../pokemon.service";
import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../pokemon";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../../mock-pokemon-list";

@Component({
  selector: "app-details-pokemon",
  templateUrl: "./details-pokemon.component.html",
  styles: [],
  // providers: [PokemonService],
})
export class DetailsPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.pokemonList = this.pokemonService.getPokemonList();
    this.pokemon = id
      ? this.pokemonService.getpokemonById(parseInt(id))
      : undefined;
  }

  handleBack(event: MouseEvent) {
    this.router.navigate([".."]);
  }

  handleEdit(event: MouseEvent) {}
}
