import {taco} from './taco';
import * as Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = "hello world" + taco;
});

app.listen(3000);