export default async function getPokemon(
  apiServer: string,
  pokedexNumber: number
) {
  const response = await fetch(`${apiServer}/pokeapi/pokemon/${pokedexNumber}`);
  const body = await response.json();
  return body;
}
