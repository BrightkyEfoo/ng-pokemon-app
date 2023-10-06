import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BorderCardDirective } from "../border-card.directive";
import { CardTypesPipePipe } from "../card-types-pipe.pipe";
import { ClickCardDirective } from "../click-card.directive";
import { DetailsPokemonComponent } from "./details-pokemon/details-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { FormsModule } from "@angular/forms";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";

const pokRoutes: Routes = [
  {
    path: "pokemons",
    component: ListPokemonComponent,
  },
  {
    path: "pokemons/:id",
    component: DetailsPokemonComponent,
  },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    ClickCardDirective,
    CardTypesPipePipe,
    ListPokemonComponent,
    DetailsPokemonComponent,
    PokemonFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
