import getPokemon from "./GetPokemon";
import { Pokemon } from "../types/Pokemon";
import getPokeIdsFromTeam from "../utils/Team/GetPokeIdsFromTeam";

export default async function getPokemonInTeam(teamId: number) {
  let pokeIds: number[] = await getPokeIdsFromTeam(teamId);
  let pokemonList: Promise<Pokemon>[] = pokeIds.map(async id => {
    return await getPokemon(id);
  });
  return await Promise.all(pokemonList);
}
