// We should use supertest for controller testing
const express = require('express');
const app = express();
const request = require('supertest');
const db = require('../config/db-config');

beforeAll(async () => {
    await db.authenticate();
})

describe("GET /professors", () => {
    it("should return all professors", async () => {
      const res = await request(app).get("list/professors");

      console.log('aaa', res.body);
      expect(res.statusCode).toBe(200);
    });
  });

  afterAll(async () => {
    await db.close();
  });