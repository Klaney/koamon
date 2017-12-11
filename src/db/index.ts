import {Client, Pool} from 'pg';
import {Models} from './models'

export class Db{
  pool: Pool
  models: Models
  constructor(){
    this.pool = new Pool()
    this.models = new Models(this.pool)
  }
  //If connection fails, add your db credentials as ENV variables
  returnDateTimeNow(){
    this.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
      })
    })
  }

  async returnFirstPerson(){
    await this.models.person.getFirstPerson()
  }
}
