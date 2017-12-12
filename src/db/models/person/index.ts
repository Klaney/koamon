import { Pool } from "pg";

export class Person {
  pool: Pool;
  constructor(pool: Pool) {
    this.pool = pool;
  }
  async getFirstPerson() {
    const result = await this.pool.query("SELECT * from person");
    if(result.rows.length > 0){
      return result.rows[0].name;
    }
    return "no first person"
    // err ? console.log(err) : res.rows.length > 0 ? res.rows[0].name : "no rows found";
  }
}
