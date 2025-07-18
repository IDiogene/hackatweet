const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  author: String,
  username: String,
  date: Date,
  TweetText: String,
  Like: [String],
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
