import * as jwt from 'koa-jwt'
import * as Router from 'koa-router'
import {Request} from 'koa'
import {Db} from '../../../db'

const db = new Db();

async function Signup(ctx: Router.IRouterContext){
  if(await db.models.user.userExists(ctx.request.body.username)){
    //create user and login
    return "you exist"
  }
  return 'you dont exist'
  //login
}

function Authenticate(ctx: Router.IRouterContext) {
  if (ctx.request.body.password === 'password') { //fix this to actually authenticate against a users id
    ctx.status = 200;
    ctx.body = {
      token: jwt({secret: process.env.SECRET_TOKEN_MESSAGE}),
      message: "Successfully logged in!"
    };
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    };
  }
  return ctx;
}


export {Authenticate, Signup}