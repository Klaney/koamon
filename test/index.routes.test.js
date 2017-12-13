const server = require("./dist/api/server");
// require supertest
const request = require("supertest");
// close the server after each test
afterEach(() => {
  server.close();
});