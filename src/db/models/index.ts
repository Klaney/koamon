import {Pool} from 'pg'
import {Person} from './person'

export class Models{
  person: Person
  constructor(pool: Pool){
    this.person = new Person(pool)
  }
}