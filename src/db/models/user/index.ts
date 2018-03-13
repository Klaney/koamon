import { Pool } from "pg";
import { newDate } from "../../services/SqlDateCreator";
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
    let pwHash = bcrypt.hash(password, 10);
    this.knex("users").insert({
      username: username,
      password: pwHash,
      createdAt: newDate()
    });
  }

  async userExists(username: string) {
    if (!username) return false;
    const result = await this.knex("users").where({ username: username });
    if (result.length > 0) {
      return result[0];
    }
    return false;
  }
}
