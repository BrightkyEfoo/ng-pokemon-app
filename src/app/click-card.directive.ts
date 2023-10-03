import { Router } from "@angular/router";
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnClickCard]",
})
export class ClickCardDirective {
  @Input("pkmnClickCard") pokName: string;
  @Input("pkId") id: string;
  constructor(el: ElementRef, private router: Router) {}
  @HostListener("click") onClick() {
    // alert(`vous avez clique sur le pkmn ${this.pokName}`);
    console.log("id", this.id);
    this.router.navigate(["pokemons", this.id]);
  }
}
