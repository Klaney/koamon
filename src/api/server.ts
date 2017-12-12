import * as Koa from 'koa';
import * as Router from 'koa-router'
import {Db} from '../db'

const app = new Koa();
const router = new Router();
app.context.db = new Db();

router.get('/', async (ctx, next) => {
  const person = await ctx.db.returnFirstPerson();
  ctx.response.body = person;
  ctx.response.status = 200;
});

app.use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);