import * as Koa from 'koa';
import * as Router from 'koa-router'
import {Db} from '../db'

const app = new Koa();
const router = new Router();
let port = process.env.PORT || 3001;
app.context.db = new Db();

router.get('/api', async (ctx, next) => {
  const person = await ctx.db.returnFirstPerson();
  ctx.response.body = person;
  ctx.response.status = 200;
});

const server = app.use(router.routes())
  .use(router.allowedMethods())
  .listen(port);

export {server};