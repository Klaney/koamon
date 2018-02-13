import { Pool } from "pg";
import * as knex from "knex";

const team = "team";

export class Team {
  knex: knex;
  constructor(knex: knex) {
    this.knex = knex;
  }

  async getTeam(id: number) {
    const result = await this.knex(team).where("id", id);
    return result ? result : null;
  }

  async createTeam(name: string, pokemon?: [number]) {
    let result;
    if (!name) {
      result = "please enter a name";
    } else {
      result = await this.knex(team).insert({
        createdAt: new Date()
          .toISOString()
          .slice(0, 19)
          .replace("T", " "),
        name: name || "",
        pokemon: pokemon ? pokemon : null,
        user_id: 1
      });
    }
    return result;
  }

  async userExists(username: string) {
    // const result = await this.knex.query(`SELECT username FROM users WHERE username='${username}'`)
    // console.log(result.rows.length)
    // if(result.rows.length > 0){
    //   return true
    // }
    // return false
  }
}
