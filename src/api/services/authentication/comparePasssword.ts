import * as bcrypt from "bcrypt";
import * as env from "dotenv";

env.config();

export default async function comparePassword(password: string, hash: string) {
  const result = await bcrypt.compare(password, hash);
  console.log(result);
}
