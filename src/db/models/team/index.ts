import { Pool } from "pg";
import * as knex from "knex";

const team = "team";

export class Team {
  knex: knex;
  constructor(knex: knex) {
    this.knex = knex;
  }

  async getTeam(id: number) {
    const result = await this.knex(team).where("team_id", id);
    return result ? result : null;
  }

  async createTeam(name: string, pokemon?: [number]) {
    let result;
    if (!name) {
      result = "please enter a name";
    } else {
      result = await this.knex(team)
        .insert({
          createdAt: new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
          name: name || "",
          pokemon: pokemon ? pokemon : null,
          trainer: 1
        })
        .returning("*");
    }
    return result;
  }
<<<<<<< HEAD
=======

  async getPokemon(id: number) {
    let result;
    if (!id) {
      result = "invalid id";
    } else {
      result = await this.knex(team)
        .where({ team_id: id })
        .select("pokemon");
    }
    return result[0].pokemon;
  }
>>>>>>> 3e4a3213e402fe1749df4756bd0ed2734ba49d90
}
