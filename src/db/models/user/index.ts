import { Pool } from "pg"

export class User {
  pool: Pool
  constructor(pool: Pool) {
    this.pool = pool
  }
  async userExists(username: string) {
    const result = await this.pool.query(`SELECT username FROM account WHERE username='${username}'`)
    console.log(result.rows.length)
    if(result.rows.length > 0){
      return true
    }
    return false
  }
}