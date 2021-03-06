import * as jwt from "koa-jwt";
import * as Router from "koa-router";
import { Request } from "koa";
import { Db } from "../../../db";
import comparePassword from "../../services/authentication/comparePasssword";

const db = new Db();

async function Signup(ctx: Router.IRouterContext, next: any) {
  console.log("signup middleware hit");
  const user = await ctx.db.models.user.userExists(
    ctx.request.body.username || null
  );
  console.log(user);
  if (user) {
    ctx.status = 201;
    ctx.user = user;
  } else {
    ctx.status = 404;
    ctx.user = null;
  }
}

function Authenticate(ctx: Router.IRouterContext) {
  if (ctx.request.body.password === "password") {
    //fix this to actually authenticate against a users id
    ctx.status = 200;
    ctx.body = {
      token: jwt({ secret: process.env.SECRET_TOKEN_MESSAGE }),
      message: "Successfully logged in!"
    };
  } else {
    throw new Error("Could not authenticate");
  }
}

export { Authenticate, Signup };
