import * as Koa from 'koa'
import * as Router from 'koa-router'
let port = process.env.PORT || 3001;

export class ConfigServer {
  app: Koa
  constructor(app: Koa){
    this.app = app
  }

  init() {
    this.app.listen(port)
  }
}