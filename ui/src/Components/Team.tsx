import * as React from "react";
import { Pokemon } from "../types/Pokemon";

function teamExists(team: Pokemon[]) {
  let teamDom: string[] = [];
  if (team && team.length > 1) {
    team.forEach(p => {
      teamDom.push(p.name);
    });
    return teamDom;
  }
  return "";
}

export default class Team extends React.Component<{ team: Pokemon[] }, {}> {
  constructor(props: { team: Pokemon[] }) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="team">{teamExists(this.props.team)}</div>;
  }
}
