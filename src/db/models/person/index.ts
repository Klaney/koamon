import { Pool } from "pg"
import * as knex from 'knex'

export class Person {
  knex: knex;
  constructor(knex: knex) {
    this.knex = knex;
  }
  async getFirstPerson() {
    const result = await this.knex.select().from("person").first();
    if(result){
      return result.name;
    }
    return "no first person"
  }
}
