import * as Router from 'koa-router'
import * as jwt from '../../middleware/authentication/jwt'
import * as bodyParser from 'koa-bodyparser'
import {Request} from 'koa';
import {Authenticate, Signup} from '../../middleware/authentication/authenticate'

const router = new Router({
  prefix: '/auth'
});

router.post('/signup', bodyParser(), (ctx: IKoaRequestWithBody) => {
  Signup(ctx)
  ctx.status = 200;
    ctx.body = {
      message: "Successfully logged in!"
    };
})

router.post('/login', bodyParser(), (ctx: IKoaRequestWithBody) => {
  Authenticate(ctx)
})

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}
const AuthRoutes = router;

export {AuthRoutes}