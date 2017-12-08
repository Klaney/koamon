import {taco} from './taco';
import * as Koa from 'koa';

const livereload = require('koa-livereload')
const app = new Koa();
const db = require('../db')

app.use(async ctx => {
  const taco = await db.query()
  console.log(taco)
  ctx.body = "hello world" + taco;
});
app.use(livereload(
//   {
//   port:3001
// }
))
app.listen(3000);