import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Error404Component } from './pages/error404/error404.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pokemons', component: PokemonsComponent},
    {path: 'pokemon/:id', component: PokemonComponent},
    {path: 'acercade', component: AcercadeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'posts', component: ListPostsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', component: Error404Component},
];