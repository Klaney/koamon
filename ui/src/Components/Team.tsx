import * as React from "react";
import { Pokemon } from "../types/Pokemon";

export class Team extends React.Component<{ team: Array<Pokemon> }, {}> {
  render() {
    return <div className="team">{this.props.team}</div>;
  }
}
