import * as Router from 'koa-router'
import {Request} from 'koa';
import {AuthRoutes} from './authentication/index'

const Routes = [AuthRoutes]

export {Routes}