import * as Koa from "koa";
import * as Router from "koa-router";
import * as dotenv from "dotenv";
import * as bodyParser from "koa-bodyparser";
import { Db } from "../db";
import { ConfigServer } from "./serverConfig";
import { Routes } from "./routes";

const app = new Koa();
const router = new Router();
app.context.db = new Db();
dotenv.config();

router.get("/api", async (ctx, next) => {
  const person = await ctx.db.returnFirstPerson();
  ctx.response.body = person;
  ctx.response.status = 200;
});

Routes.forEach(route => {
  app.use(route.routes()).use(route.allowedMethods());
});

const server = app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001);

export { server };
