import * as Koa from "koa";
import * as Router from "koa-router";
import * as dotenv from "dotenv";
import * as bodyParser from "koa-bodyparser";
import * as next from "next";

import { Db } from "../db";
import { ConfigServer } from "./serverConfig";
import { Routes } from "./routes";

const app = new Koa();
const router = new Router();
const n = next({ dev: true });
const handle = n.getRequestHandler();
app.context.db = new Db();
dotenv.config();

router.get("/api", async (ctx, next) => {
  const team = await ctx.db.getTeam(1);
  ctx.response.body = team;
  ctx.response.status = 200;
});

Routes.forEach(route => {
  app.use(route.routes()).use(route.allowedMethods());
});

const server = app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001);

n.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());

  server.listen(3000);
});

export { server };
