import * as Router from "koa-router";
import { Request } from "koa";

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}

export { IKoaRequestWithBody };
