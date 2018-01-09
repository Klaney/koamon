import * as jwt from 'koa-jwt'
import * as Router from 'koa-router'

export function Authenticate(ctx: Router.IRouterContext) {
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