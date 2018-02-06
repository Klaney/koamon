import * as Router from "koa-router";
import { Request } from "koa";
import { AuthRoutes } from "./authentication/index";
import { ScriptRoutes } from "./script/index";

const Routes = [AuthRoutes, ScriptRoutes];

export { Routes };
