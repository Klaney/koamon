import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import * as fetch from "isomorphic-fetch";
import { Request } from "koa";

const router = new Router({
  prefix: "/team"
});

router.get("/:teamId/pokemon", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const result = await ctx.db.models.team.getPokemon(ctx.params.teamId);
  if (!result) {
    ctx.status = 404;
  } else {
    ctx.status = 200;
    ctx.body = result;
  }
});

router.post("/", bodyParser(), async (ctx: IKoaRequestWithBody) => {
  const result = await ctx.db.models.team.createTeam(ctx.request.body.name);
  ctx.body = result ? result : "wrong shit";
});

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}

const TeamRoutes = router;

export { TeamRoutes };
