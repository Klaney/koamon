import {Pool} from 'pg';

export class Person{
  pool: Pool
  constructor(pool: Pool){
    this.pool = pool
  }
  getFirstPerson(){
    this.pool.query('SELECT * from person', (err, res) => {
      err ? console.log(err) : console.log(res.rows.length > 0 ? res.rows[0].name : console.log("no rows found"));
    })
  }
}