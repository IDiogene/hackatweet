import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { addBookmark, removeBookmark } from "../reducers/bookmarks";
// import {} from "../reducers/hiddenArticles";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Tweets = ({index, author, username, date, TweetText }) => {
  const dispatch = useDispatch();

  const [usernameConnected, setUsernameConnected] = useState(username);

  const user = useSelector((state) => state.user);

  return (
    <div key={index} className={styles.soloTweet}>
      <div className={styles.nameUsernameDate}>
        <img
          className={styles.Avatar}
          src="photo-profil.JPG"
          alt="Avatar"
          width={50}
          height={50}
        />
        <h1 className={styles.authorName}>{author} :</h1>
        <h2 className={styles.username}> {username}</h2>
        <h3 className={styles.date}>{date}</h3>
      </div>
      <p className={styles.TweetText}>{TweetText}</p>
      {
        (user.username === usernameConnected)? <button>Pouet</button> : null
      }
    </div>
  );
};

export default Tweets;
