import styles from "../styles/Home.module.css";
import Image from "next";
import Tweets from "./Tweets";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const url = 'http://localhost:3000/tweet'


function Home() {
  const [tweetsData, setTweetsData] = useState([]);
  const [newTweet, setNewTweet] = useState("");
  const user = useSelector((state) => state.user); 


  const addTweet = async () => {
    const resp = await fetch(`${url}/newTweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TweetText: newTweet,
        username: user.username,
        author: user.author
      }),
    });
    const data = await resp.json();
    fetchTweet()
    setNewTweet("");
  };

  const fetchTweet = () => {
    fetch("http://localhost:3000/tweet/")
      .then((response) => response.json())
      .then((data) => {
        setTweetsData(data.tweets);
        console.log(data);
      });
  }
    
  useEffect(() => {
    fetchTweet()
  }, [])

  return (
    
    <div className={styles.body}>
      {/* partie gauche */}
      <main className={styles.main}>
        <div className={styles.partLeft} >
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
            <div className={styles.divTweetAndCount} style={{backgroundColor:'red'}}>
              <div className={styles.divInputTweet}>
              <textarea type="text" cols="50" className={styles.inputTweet} value={newTweet} onChange={(e) => { newTweet.length < 280 ? setNewTweet(e.target.value) : null}} />
              <button
                className={styles.btnTweet}
                id="register"
                onClick={() => addTweet()}
              >
                Tweet
              </button>
              </div>
              <div className={styles.CountCaract}>{newTweet.length}/280</div>              
            </div>
          </div>


          <div className={styles.containerTweets}>
            {tweetsData.map((tweet, index) => {
              return <Tweets
                  maj={fetchTweet}
                  key={index}
                  author={tweet.author}
                  username={tweet.username}
                  date={tweet.date}
                  TweetText={tweet.TweetText}
                  id={tweet._id}
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
