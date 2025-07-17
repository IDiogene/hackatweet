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
  Tweet.find()
    .then((tweets) => {
      res.json({ result: true, tweets: tweets });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "et nooooooon try again" });
    });
});

router.delete('/delete', async(req, res) => {
  const data = await Tweet.deleteOne({_id: req.body.id})
  res.json({result : true})
})

module.exports = router;
