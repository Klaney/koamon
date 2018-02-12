import * as Router from "koa-router";
import { Request } from "koa";
import { AuthRoutes } from "./authentication/index";
import { ScriptRoutes } from "./script/index";
import { PokeapiRoutes } from "./pokeapi/index";

const Routes = [AuthRoutes, ScriptRoutes, PokeapiRoutes];

export { Routes };
