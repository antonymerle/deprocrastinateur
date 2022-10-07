require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pg = require("pg");

const port = process.env.PORT || 5000;

const connectionString = process.env.CONNECTION_STRING;

app.use(express.json());
app.use(cors());

const pool = new pg.Pool({ connectionString });
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

app.listen(port, () => {
  console.log("Serveur lancé sur port", port);
});

app.get("/", (req, res) => {
  const query = {
    text: "SELECT * FROM tache",
  };

  pool.query(query, (dberr, dbres) => {
    if (dberr) {
      res.status(500).json({ erreur: dberr.message });
    } else {
      res.status(200).json(dbres.rows);
    }
  });
});

app.post("/", (req, res) => {
  console.log(req.body);

  const { texte, echeance, rappel } = req.body;

  const query = {
    text: "INSERT INTO tache(texte, echeance, rappel) VALUES($1, $2, $3)",
    values: [texte, echeance, rappel],
  };

  pool.query(query, (dberr, dbres) => {
    if (dberr) {
      res.status(400).json({ msg: dberr.message });
    } else {
      res.status(200).json({ msg: "Tache ajoutée." });
    }
  });
});

app.put("/", (req, res) => {
  if (typeof req.body.rappel !== "boolean" || isNaN(req.body.tache_id)) {
    return res.status(400).json({ msg: "bad request" });
  }
  const query = {
    text: "UPDATE tache SET rappel = $1 WHERE tache_id = $2",
    values: [req.body.rappel, req.body.tache_id],
  };

  pool.query(query, (dberr, dbres) => {
    if (dberr) {
      res.status(500).json({ msg: dberr.message });
    } else {
      res
        .status(200)
        .json({ msg: `Rappel ${req.body.rappel ? "activé" : "désactivé"}` });
    }
  });
});

app.delete("/", (req, res) => {
  console.log(req.body);

  if (!req.body.tache_id || isNaN(req.body.tache_id)) {
    return res.status(400).json({ msg: "bad request" });
  }

  const query = {
    text: "DELETE FROM tache WHERE tache_id = $1",
    values: [req.body.tache_id],
  };

  pool.query(query, (dberr, dbres) => {
    if (dberr) {
      res.status(500).json({ msg: dberr.message });
    } else {
      res.status(200).json({ msg: "Tâche supprimée." });
    }
  });
});
