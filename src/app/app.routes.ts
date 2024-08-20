import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pokemons', component: PokemonComponent},
    {path: 'acercade', component: AcercadeComponent},
];
