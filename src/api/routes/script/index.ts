import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import { Request } from "koa";

const router = new Router({
  prefix: "/script"
});

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}
const ScriptRoutes = router;

export { ScriptRoutes };
