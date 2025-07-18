import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { addBookmark, removeBookmark } from "../reducers/bookmarks";
// import {} from "../reducers/hiddenArticles";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const url = 'http://localhost:3000/tweet'

const Tweets = ({index, author, username, date, TweetText, id, maj, like }) => {
  const dispatch = useDispatch();
  const myUsername = useSelector((state) => state.user.username); 
  const [text, setText] = useState(TweetText)
  const [modify, setModify] = useState(false)
  

  const [usernameConnected, setUsernameConnected] = useState(username);
  



 const handleLike = async() => {
        const resp = await fetch(`${url}/like`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: myUsername,
                id : id
            }),
        });
        const data = await resp.json();
        console.log(data);
        maj()

        }
 

  const deleteTweet = async() => {
    const resp = await fetch(`${url}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            })},)
    const data = await resp.json()
    console.log(data)
    maj()
  }

  const modifyTweet = async() => {
    if (modify) {
    const resp = await fetch(`${url}/modify`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newText: text,
                id : id
            }),
        });
        const data = await resp.json();
        console.log(data);
        maj()
        setModify(false)
    } else {
      setModify(true)
    }
  }

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
      {modify ? <textarea name="" id="" onChange={(e) => setText(e.target.value)}>{text}</textarea> : <p className={styles.TweetText}>{TweetText}</p>}
      <button className={styles.btnLike} onClick={() => handleLike()} style={like.find(user => user === myUsername) ? {backgroundColor:'green'} : null}>{like.length}Lovilove</button>
     { myUsername === username ? <button className={styles.btnLike} onClick={() => modifyTweet()} >{modify ? 'Valider' : 'Modifier'}</button> : null}
      {
        (user.username === usernameConnected)? <button onClick={() => deleteTweet()}>Pouet</button> : null
      }
    </div>
  );
};

export default Tweets;
