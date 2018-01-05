import * as jwt from "koa-jwt";

export default jwt({
  secret: process.env.SECRET_TOKEN_MESSAGE
});
