import { Pool } from "pg";
import { Team } from "./team";
import { User } from "./user";
import * as knex from "knex";

export class Models {
  team: Team;
  user: User;
  constructor(pool: knex) {
    this.team = new Team(pool);
    this.user = new User(pool);
  }
}
