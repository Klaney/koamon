import {Pool} from 'pg'
import {Person} from './person'
import {User} from './user'

export class Models{
  person: Person
  user: User
  constructor(pool: Pool){
    this.person = new Person(pool)
    this.user = new User(pool)
  }
}