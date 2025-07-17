var express = require("express");
var router = express.Router();

require("../models/connexion");
const Tweet = require("../models/tweets");

router.post("/newTweet", (req, res) => {
  // Check if the user has not already been registered
  const newTweet = new Tweet({
    username: req.body.username,
    author: req.body.author,
    date: new Date(),
    TweetText: req.body.TweetText,
  });

  newTweet.save().then((newDoc) => {
    res.json({ result: true, newDoc });
  });
});

router.get("/", (req, res) => {
  res.json({ result: true });
});

module.exports = router;
