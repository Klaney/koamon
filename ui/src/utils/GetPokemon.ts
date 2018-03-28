import { Pokemon } from "../types/Pokemon";

const apiUrl = "http://localhost:3001";

export default async function getPokemon(pokedexNumber: number) {
  const response = await fetch(`${apiUrl}/pokeapi/pokemon/${pokedexNumber}`);
  const body: Pokemon = await response.json();
  return body;
}
