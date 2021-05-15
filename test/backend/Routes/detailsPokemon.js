const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get("/pokemons/:id", (req, res) => { //je kan endpoint veranderen naar wat je wil
    const { id } = req.params;
    var response = JSON.parse(
      fs.readFileSync("./pokemon.json", { encoding: "utf8" }) //File.json is de naam van je bestand
    );

    const found = response.find(pokemon => pokemon.id ==id);
    if(found) {
        res.status(200).json(found);

    }else {
        res.status(404).json({ message:"fout niet gevonden"});
    }
   
  });

  module.exports = router;