import * as React from "react";
import "./App.css";
import Header from "../Components/Layout/Header";
import RenderSinglePokemon from "../Components/Pokemon/index";
import { Pokemon } from "../types/Pokemon";
import getPokemonInTeam from "../utils/GetPokemonInTeam";

class TeamPage extends React.Component<
  { teamId: number },
  { pokemon: Array<Pokemon> }
> {
  // create array of pokemon, pass it as props to team
  async componentWillMount() {
    let pokemon = await getPokemonInTeam(this.props.teamId);
    let pokeList: Pokemon[] = await pokemon;
    this.setState({ pokemon: pokeList });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <RenderSinglePokemon />
      </div>
    );
  }
}

export default TeamPage;
