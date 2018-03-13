import * as Router from "koa-router";
import * as jwt from "../../middleware/authentication/jwt";
import * as bodyParser from "koa-bodyparser";
import { IKoaRequestWithBody } from "../../interfaces/KoaRequestExtender";
import { Request } from "koa";
import {
  Authenticate,
  Signup
} from "../../middleware/authentication/authenticate";

import Login from "../../middleware/authentication/login";

const router = new Router({
  prefix: "/auth"
});

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    ctx.body = `Uh-oh: ${err.message}`;
    console.log("Error handler:", err.message);
  }
});

router.post("/signup", bodyParser(), Signup, (ctx: IKoaRequestWithBody) => {
  console.log("signup route hit");
  ctx.body = ctx.user ? "Successfully created" : "not created";
});

router.post("/login", bodyParser(), Login, (ctx: IKoaRequestWithBody) => {
  console.log(ctx.user);
});

const AuthRoutes = router;

export { AuthRoutes };
