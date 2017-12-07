import {taco} from './taco';
import * as Koa from 'koa';
const  livereload = require('../../node_modules/koa-livereload');

const app = new Koa();

app.use(async ctx => {
  ctx.body = "hello world" + taco;
});
app.use(livereload(
//   {
//   port:3001
// }
))
app.listen(3000);