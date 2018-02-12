import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import * as fetch from "isomorphic-fetch";
import { Request } from "koa";

const P = require("pokedex-promise-v2");
const Pokedex = new P();

const router = new Router({
  prefix: "/pokeapi"
});

router.get("/pokemon/:pokedexNum", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const response = await Pokedex.getPokemonByName(ctx.params.pokedexNum);
  ctx.body = response;
});

const PokeapiRoutes = router;

export { PokeapiRoutes };
