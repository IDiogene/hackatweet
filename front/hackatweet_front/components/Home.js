import styles from "../styles/Home.module.css";
import Image from "next";
import Tweets from "./Tweets";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

function Home() {
  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweet/")
      .then((response) => response.json())
      .then((data) => {
        setTweetsData(data.tweets);
        console.log(data);
      });
  }, []);

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.partLeft}>
          <img
            className={styles.logoTweeter}
            src="logo-twitter.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        <div className={styles.partCenter}>
          <div className={styles.divHashtagsSearch}>
            <div className={styles.Hashtag}>Hashtag</div>
            <input
              className={styles.searchHashtag}
              type="Hashtag"
              placeholder="What's up?"
              id="searchHashtag"
              // onChange={(e) => setSignUpPassword(e.target.value)}
              // value={searchHashtag}
            />
            <div className={styles.divTweetAndCount}>
              <div className={styles.CountCaract}>0/280</div>
              <button
                className={styles.btnTweet}
                id="register"
                // onClick={() => handleRegister()}
              >
                Tweet
              </button>
            </div>
          </div>
          <div className={styles.containerTweets}>
            {tweetsData.map((tweet, index) => {
              return <Tweets
                  key={index}
                  author={tweet.author}
                  username={tweet.username}
                  date={tweet.date}
                  TweetText={tweet.TweetText}
                />
            })}
          </div>
        </div>

        <div className={styles.partRight}>prout</div>
      </main>
    </div>
  );
}

export default Home;
