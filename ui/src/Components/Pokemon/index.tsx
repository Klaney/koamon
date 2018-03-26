import * as React from "react";

const apiUrl = "http://localhost:3001";

async function getPokemon(apiServer: string, pokedexNumber: number) {
  const response = await fetch(`${apiServer}/pokeapi/pokemon/${pokedexNumber}`);
  const body = await response.json();
  // console.log(body);
  return body;
}

class RenderSinglePokemon extends React.Component<{}, { pokemon: Pokemon }> {
  constructor(props: object) {
    super(props);
    this.state = { pokemon: { name: "taco" } };
  }
  async componentDidMount() {
    const body = await getPokemon(apiUrl, 1);
    this.setState({ pokemon: body });
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <pre className="pokemonName">
          <style>{`
            .pokemonName {
              border: 2px solid red;
            }
          `}</style>
          {JSON.stringify(this.state.pokemon.name, null, 2)}
        </pre>
      </div>
    );
  }
}
type Pokemon = {
  name: string;
};
export default RenderSinglePokemon;
