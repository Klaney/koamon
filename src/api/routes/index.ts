import * as Router from "koa-router";
import { Request } from "koa";
import { AuthRoutes } from "./authentication";
import { ScriptRoutes } from "./script";
import { PokeapiRoutes } from "./pokeapi";
import { TeamRoutes } from "./team";

const Routes = [AuthRoutes, ScriptRoutes, PokeapiRoutes, TeamRoutes];

export { Routes };
