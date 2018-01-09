import { Pool } from "pg";

export class User {
  pool: Pool;
  constructor(pool: Pool) {
    this.pool = pool;
  }
  async userExists(username: string) {
    const result = await this.pool.query("SELECT * FROM user WHERE username=" + username);
    if(result.rows.length > 0){
      return true
    }
    return false
  }
}