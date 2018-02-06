import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import axios from "axios";
import { Request } from "koa";

const router = new Router({
  prefix: "/script"
});

router.get("/pokemon", async ctx => {
  let results = await axios
    .get("http://pokeapi.co/api/v2/pokemon")
    .then(res => {
      console.log(res.data.next);
    });
  // "http://pokeapi.co/api/v2/pokemon").then(res => {
  // return res;
});

// console.log(results););

// router.post("/signup", bodyParser(), (ctx: IKoaRequestWithBody) => {
//   Signup(ctx);
//   ctx.status = 200;
//   ctx.body = {
//     message: "Successfully logged in!"
//   };
// });

// router.post("/login", bodyParser(), (ctx: IKoaRequestWithBody) => {
//   Authenticate(ctx);
// });

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}
const ScriptRoutes = router;

export { ScriptRoutes };
