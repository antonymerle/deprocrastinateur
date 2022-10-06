require("dotenv").config();
const express = require("express");
const app = express();
const pg = require("pg");

const port = process.env.PORT || 5000;

const connectionString = process.env.CONNECTION_STRING;

const pool = new pg.Pool({ connectionString });
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

app.listen(port, () => {
  console.log("Serveur lancé sur port", port);
});

app.get("/", (req, res) => {});

app.post("/", (req, res) => {});

app.delete("/", (req, res) => {});
