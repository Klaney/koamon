import * as jwt from "koa-jwt";
import * as Router from "koa-router";
import { Request } from "koa";
import comparePassword from "../../services/authentication/comparePasssword";

async function Signup(ctx: Router.IRouterContext) {
  console.log("signup middleware hit");
  const userExists: boolean = await ctx.db.models.user.userExists(
    ctx.request.body.username || null
  );
  if (userExists) {
    let user = await ctx.db.models.user.getUser(ctx.request.body.username);
    ctx.status = 201;
    ctx.user = user;
  } else {
    ctx.db.models.user.createUser(
      ctx.request.body.username,
      ctx.request.body.password
    );
    ctx.status = 404;
    ctx.user = null;
  }
}
