var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const Tweet = require("../models/tweets");

router.get("/Tweets", (req, res) => {
  Tweet.find()
    .then((tweets) => {
      res.json({ Tweets: tweets });
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des tweets :", error);
      res.status(500).json({ Tweets: [] });
    });
});

module.exports = router;
