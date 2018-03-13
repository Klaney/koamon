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
