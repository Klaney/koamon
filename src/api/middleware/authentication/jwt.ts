import * as jwt from "koa-jwt";
import { IKoaRequestWithBody } from "../../interfaces/KoaRequestExtender";

const login = async function login(ctx: IKoaRequestWithBody, next: any) {
  jwt({
    secret: process.env.SECRET_TOKEN_MESSAGE
  });
  await next();
};
