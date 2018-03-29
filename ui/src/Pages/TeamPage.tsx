import * as React from "react";
import { Pokemon } from "../types/Pokemon";
import getPokemonInTeam from "../utils/GetPokemonInTeam";
import Team from "../Components/Team";

class TeamPage extends React.Component<
  { teamId: number },
  { pokemon: Array<Pokemon> }
> {
  constructor(props: { teamId: number }) {
    super(props);
    this.state = { pokemon: [] };
  }
  async componentWillMount() {
    let pokemon = await getPokemonInTeam(this.props.teamId);
    let pokeList: Pokemon[] = await pokemon;
    this.setState({ pokemon: pokeList });
  }
  render() {
    return (
      <div className="TeamPage">
        <Team team={[...this.state.pokemon]} />
      </div>
    );
  }
}

export default TeamPage;
