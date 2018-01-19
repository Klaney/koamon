import {Pool} from 'pg'
import {Person} from './person'
import {User} from './user'
import * as knex from 'knex'

export class Models{
  person: Person
  user: User
  constructor(pool: knex){
    this.person = new Person(pool)
    this.user = new User(pool)
  }
}