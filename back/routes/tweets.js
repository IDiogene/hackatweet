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


router.patch('/like', async(req, res) => {
  try {
  const data = await Tweet.findOne({_id: req.body.id})
  console.log(data.Like)

  if (data.Like.find(user => user === req.body.username)) {
    // retirer un like par username
    const newArrDel = data.Like.filter(user => user !== req.body.username)
    const maj = await Tweet.updateOne({_id : req.body.id}, {Like : newArrDel})
    res.json({result : true})

  } else {
    // ajouter un like par username
    const newArrAdd = [...data.Like, req.body.username]
    const maj = await Tweet.updateOne({_id : req.body.id}, {Like : newArrAdd})
    res.json({result : true})

  }} catch (error) {

    console.log(error)
    res.json(error)

  }
})

router.patch('/modify' , async(req, res) => {
  try {
  const data = await Tweet.updateOne({_id: req.body.id}, {TweetText : req.body.newText} )
  res.json({result : true})

  } catch (error) {
    res.json({error})
  }
})


module.exports = router;
