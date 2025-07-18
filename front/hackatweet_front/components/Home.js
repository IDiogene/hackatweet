import styles from "../styles/Home.module.css";
import Image from "next";
import Tweets from "./Tweets";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const url = 'http://localhost:3000/tweet'


function Home() {
  const [tweetsData, setTweetsData] = useState([]);
  const [newTweet, setNewTweet] = useState("");  
  const [hashtag, setHashtag] = useState([])
  const [search, setSearch] = useState("");
  

  const hashtagPatern = /#[a-zA-Z0-9_]+/ig
  const searchPatern = new RegExp(search, 'ig')

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
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTweetsData(data.tweets);
      });
  };


  useEffect(() => {
    setHashtag(tweetsData
        .map((tweet => tweet.TweetText.match(hashtagPatern) ? tweet.TweetText.match(hashtagPatern) : null))
        .filter(match => match !== null)
      )
       const intervalId = setInterval(() => {
          fetchTweet()

          }, 1000);

        return () => clearInterval(intervalId);   
  }, [tweetsData])




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
            <div className={styles.divTweetAndCount}>
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
              <div className={styles.CountCaract} style={{ color:"white"}}>{newTweet.length}/280</div>
               <p style={{color: "white", display:"flex", justifyContent:'center'}}>Tweet</p>

          <div className={styles.containerTweets}>
           
            {[...tweetsData].reverse().map((tweet, index) => {
              if (
                tweet.username.match(searchPatern) || 
                tweet.TweetText.match(searchPatern) ||
                search === ''            
              ) {
              return <Tweets
                  maj={fetchTweet}
                  key={index}
                  author={tweet.author}
                  username={tweet.username}
                  date={tweet.date}
                  TweetText={tweet.TweetText}
                  id={tweet._id}
                  like={tweet.Like}
                />
            }})}
             </div>
            </div>
          </div>
        </div>

        <div className={styles.partRight}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="chercher un... hashtags? nom? text?..." className={styles.searchInput}/>
          {hashtag.map(hashtag => (
            <p 
            className={styles.hashtag}
            onClick={() => setSearch(hashtag)}
            >
              {hashtag}
            </p>
            
            ))}
        
        </div>

      </main>
    </div>
  );
}

export default Home;
