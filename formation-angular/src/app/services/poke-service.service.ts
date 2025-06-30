import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
      url: string;
    };
  }>;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface TypeResponse {
  count: number;
  results: PokemonType[];
}

export interface TypeDetailResponse {
  name: string;
  pokemon: Array<{
    pokemon: Pokemon;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetail(url: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(url);
  }

  getPokemonById(id: number): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.baseUrl}/pokemon/${id}`);
  }

  getTypes(): Observable<TypeResponse> {
    return this.http.get<TypeResponse>(`${this.baseUrl}/type`);
  }

  getPokemonByType(type: string): Observable<TypeDetailResponse> {
    return this.http.get<TypeDetailResponse>(`${this.baseUrl}/type/${type}`);
  }
}
