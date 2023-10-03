import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../pokemon";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../../mock-pokemon-list";

@Component({
  selector: "app-details-pokemon",
  templateUrl: "./details-pokemon.component.html",
  styles: [],
})
export class DetailsPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute , private router:Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.pokemonList = POKEMONS;
    this.pokemon = id
      ? this.pokemonList.find((pok) => pok.id === parseInt(id))
      : undefined;
  }

  handleBack(event: MouseEvent) {
    this.router.navigate([".."])
  }
}
