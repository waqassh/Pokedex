const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get("/pokemons", (req, res) => { //je kan endpoint veranderen naar wat je wil
    var response = JSON.parse(
      fs.readFileSync("./pokemon.json", { encoding: "utf8" }) //File.json is de naam van je bestand
    );
    res.json(response);
  });

  module.exports = router;