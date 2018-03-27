import * as React from "react";
import getPokemon from "./utils/GetPokemon";
import { Pokemon } from "./types/Pokemon";

const apiUrl = "http://localhost:3001";

class RenderSinglePokemon extends React.Component<{}, { pokemon: Pokemon }> {
  constructor(props: object) {
    super(props);
    this.state = { pokemon: { name: "" } };
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
          {this.state.pokemon.name}
        </pre>
      </div>
    );
  }
}

export default RenderSinglePokemon;
