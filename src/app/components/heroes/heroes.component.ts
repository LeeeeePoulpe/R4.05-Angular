import { Component } from '@angular/core';
import {HeroInterface} from "../../data/heroInterface";
import {UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../../data/mock-heroes";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: HeroInterface;
  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
  }

  hero: HeroInterface = {
    id: 1,
    name: 'Windstorm'
  }
  protected readonly onselect = onselect;
}
