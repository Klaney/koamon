import * as jwt from "koa-jwt";
import * as Router from "koa-router";
import { Request } from "koa";
import comparePassword from "../../services/authentication/comparePasssword";

export default async function Login(ctx: Router.IRouterContext, next: any) {
  if (ctx.user) ctx.body = "already logged in";
  console.log(ctx.state.user);
  const user = await ctx.db.models.user.userExists(
    ctx.request.body.username || null
  );
  if (user) {
    ctx.status = 201;
    ctx.state.user = user;
    await next();
  } else {
    ctx.status = 404;
    await next();
  }
}
