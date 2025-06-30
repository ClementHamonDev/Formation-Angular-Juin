import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeServiceService, Pokemon, PokemonDetail, TypeResponse, PokemonType, TypeDetailResponse } from '../../services/poke-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList = signal<PokemonDetail[]>([]);
  types = signal<PokemonType[]>([]);
  selectedType = signal<string>('');
  currentOffset = signal<number>(0);
  limit = 20;

  constructor(private pokeService: PokeServiceService) {}

  ngOnInit(): void {
    this.loadPokemon();
    this.loadTypes();
  }

  loadPokemon(): void {
    this.pokeService.getPokemonList(this.limit, this.currentOffset()).subscribe({
      next: (response) => {

        const pokemonDetailRequests = response.results.map(pokemon => 
          this.pokeService.getPokemonDetail(pokemon.url)
        );

        forkJoin(pokemonDetailRequests).subscribe({
          next: (pokemonDetails) => {
            this.pokemonList.set([...this.pokemonList(), ...pokemonDetails]);
          },
          error: (error) => {
            console.error('Erreur lors du chargement des détails Pokémon:', error);
          }
        });
      },
      error: (error) => {
        console.error('Erreur lors du chargement de la liste Pokémon:', error);
      }
    });
  }

  loadTypes(): void {
    this.pokeService.getTypes().subscribe({
      next: (response) => {

        this.types.set(response.results.slice(0, 18));
      },
      error: (error) => {
        console.error('Erreur lors du chargement des types:', error);
      }
    });
  }

  loadMore(): void {
    this.currentOffset.set(this.currentOffset() + this.limit);
    this.loadPokemon();
  }

  onTypeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedType = target.value;
    this.selectedType.set(selectedType);

    if (selectedType === '') {
        this.pokemonList.set([]);
      this.currentOffset.set(0);
      this.loadPokemon();
    } else {
      this.loadPokemonByType(selectedType);
    }
  }

  loadPokemonByType(type: string): void {
    this.pokeService.getPokemonByType(type).subscribe({
      next: (response) => {
        // Limiter à 50 Pokémon pour éviter de surcharger l'API
        const pokemonUrls = response.pokemon.slice(0, 50).map(p => p.pokemon.url);
        
        const pokemonDetailRequests = pokemonUrls.map(url => 
          this.pokeService.getPokemonDetail(url)
        );

        forkJoin(pokemonDetailRequests).subscribe({
          next: (pokemonDetails) => {
            this.pokemonList.set(pokemonDetails);
          },
          error: (error) => {
            console.error('Erreur lors du chargement des Pokémon par type:', error);
          }
        });
      },
      error: (error) => {
        console.error('Erreur lors du chargement des Pokémon par type:', error)
      }
    });
  }

  getPokemonImage(pokemon: PokemonDetail): string {
    return pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
  }

  getPokemonTypes(pokemon: PokemonDetail): string[] {
    return pokemon.types.map(type => type.type.name);
  }
}
