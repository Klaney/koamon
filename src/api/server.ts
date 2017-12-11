import * as Koa from 'koa';
import {Db} from '../db'

const livereload = require('koa-livereload')
const app = new Koa();
app.context.db = new Db();

app.use(async ctx => {
  ctx.body = await ctx.db.returnFirstPerson();
});

app.listen(3000);