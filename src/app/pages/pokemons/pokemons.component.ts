import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonResponse } from '../../utils/pokemon';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  //pokemons:Pokemon[]=(pokemonData as any).default;

  pokemons:Pokemon[]=[];
  pokemonResponse?:PokemonResponse;

  constructor(private router:Router, private pokemonsService:PokemonsService) { }

  ngOnInit(): void { 
    this.getPokemons();
  }

  getPokemons():void{
    this.pokemonsService.getPokemons().subscribe((pokemonResponse)=>{
      this.pokemonResponse=pokemonResponse;
      for(const pokemonResult of this.pokemonResponse.results){
        this.pokemonsService.getPokemon(pokemonResult.name).subscribe((pokemon)=>{
          this.pokemons.push(pokemon);
        });
      }
    });
  }

  onClickPokemon(pokemon:Pokemon):void{
    this.router.navigate(['/pokemon',pokemon.id]);
  }

}
