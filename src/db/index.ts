import { Client, Pool } from "pg";
import { Models } from "./models";
import * as knex from "knex";

export class Db {
  knex: knex;
  models: Models;
  constructor() {
    this.knex = knex({
      client: "pg",
      connection: {
        host: process.env.HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME
      },
      pool: {
        afterCreate: function(conn: any, done: any) {
          // in this example we use pg driver's connection API
          conn.query('SET timezone="UTC";', function(err: any) {
            if (err) {
              // first query failed, return error and don't try to make next query
              done(err, conn);
            } else {
              // do the second query...
              conn.query("SELECT * from team;", function(err: any) {
                // if err is not falsy, connection is discarded from pool
                // if connection aquire was triggered by a query the error is passed to query promise
                done(err, conn);
              });
            }
          });
        }
      }
    });
    this.models = new Models(this.knex);
  }
  //If connection fails, add your db credentials as ENV variables
  checkConnection() {
    // knex.Client()
  }
  getTeam(id: number) {
    const team = this.models.team.getTeam(id);
    return team;
  }
  createTeam(name: string, pokemon?: [number]) {
    const team = this.models.team.createTeam(name, pokemon ? pokemon : null);
    return team;
  }
}
