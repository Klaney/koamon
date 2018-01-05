import * as Router from 'koa-router'
import * as jwt from '../../middleware/authentication/jwt'
import {Authenticate} from '../../middleware/authentication/authenticate'

const router = new Router();

router.post('/login', (ctx, next) => {
  Authenticate(this)
})

export {router}