import { Pool } from "pg";
import * as knex from "knex";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";

dotenv.config();

export class User {
  knex: knex;
  taco: knex;
  constructor(knex: knex) {
    this.knex = knex;
  }

  async createUser(username: string, password: string) {
    let pwHash = bcrypt.hashSync(password, 10);
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
