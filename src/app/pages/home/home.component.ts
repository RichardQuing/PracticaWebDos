import { Component } from '@angular/core';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { CommonModule } from '@angular/common';
import {randomInt} from 'crypto'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
pokemons:Pokemon[]=(pokemonData as any).default;
idPokemonSemana:number=randomInt(0, 3);

  constructor() { }

  ngOnInit(): void {
    console.log(pokemonData);
  }
}