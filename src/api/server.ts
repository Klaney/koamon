import * as Koa from "koa";
import * as Router from "koa-router";
import * as dotenv from "dotenv";
import * as bodyParser from "koa-bodyparser";

import { Db } from "../db";
import { Routes } from "./routes";

const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();
app.context.db = new Db();
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    ctx.body = `App encountered an error: ${err.message}`;
    console.log("Error handler:", err.message);
  }
});
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
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001, () => {
    console.log("App is now listening on 3001");
  });

export { server };
