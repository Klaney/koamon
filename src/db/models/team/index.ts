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
    return result ? result : "no team";
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
