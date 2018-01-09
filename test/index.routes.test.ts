declare var jest, describe, it, expect, test;

import { server } from '../src/api/server'
import * as request from 'supertest'

describe("routes: index", async () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/api");
    expect(response.status).toEqual(200);
    expect(response.type).toBe("text/plain");
    expect(response.text).toEqual("keaton");
  });
});
