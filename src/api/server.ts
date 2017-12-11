import * as Koa from 'koa';
import * as Router from 'koa-router'
import {Db} from '../db'

const app = new Koa();
const router = new Router();
app.context.db = new Db();

router.get('/', (ctx, next) => {
  const person = ctx.db.returnFirstPerson();
  ctx.body = "whatever"
});

app.use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);