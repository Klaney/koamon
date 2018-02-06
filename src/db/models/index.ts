import { Pool } from "pg";
import { Pokemon } from "./pokemon";
import { User } from "./user";
import * as knex from "knex";

export class Models {
  pokemon: Pokemon;
  user: User;
  constructor(pool: knex) {
    this.pokemon = new Pokemon(pool);
    this.user = new User(pool);
  }
}
