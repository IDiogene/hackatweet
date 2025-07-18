import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LikeIcon from '../icons/heart-solid.svg'
import ModifyIcon from '../icons/gears-solid.svg'
import CheckIcon from '../icons/check-solid.svg'
import DeleteIcon from '../icons/circle-xmark-solid.svg'


import styles from "../styles/Tweets.module.css";


const url = 'http://localhost:3000/tweet'

const Tweets = ({index, author, username, date, TweetText, id, maj, like }) => {
  const dispatch = useDispatch();
  const myUsername = useSelector((state) => state.user.username); 
  const [text, setText] = useState(TweetText)
  const [modify, setModify] = useState(false)
  

  const [usernameConnected, setUsernameConnected] = useState(username);
  const dateFormated = () => {
    const newDate = new Date(date)
    return `à tweeté le : ${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
  }


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

  const btnModify = modify ? <textarea name="" id="" onChange={(e) => setText(e.target.value)}>{text}</textarea> : <p className={styles.TweetText}>{TweetText}</p>;

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
        <h3 className={styles.date}>{dateFormated()}</h3>
      </div>
      {modify ? <textarea name="" id="" onChange={(e) => setText(e.target.value)}>{text}</textarea> : <p className={styles.TweetText}>{TweetText}</p>}
      
      <div className={styles.divLikeCount}>
      <LikeIcon
        src="/heart-solid.png"
        alt="Like"
        width={20}
        height={20}
        className={styles.btnLike}
        onClick={() => handleLike()}
        style={like.find(user => user === myUsername) ? {fill:'red'} : null}
      />
      <span className={styles.counterLike}>{like.length}</span>
      
      <div className={styles.divBtnModify}>
     { myUsername === username ? <div
        onClick={() => modifyTweet()} >{modify ? 
     <CheckIcon 
     src="/check-solid.svg"
        alt="CheckText"
        width={24}
        height={24}
     className={styles.btnCheck}
     /> : 
      <ModifyIcon 
        src="/gears-solid.svg"
        alt="ModifyText"
        width={24}
        height={25}
        className={styles.btnModify}
        onClick={() => setModify(!modify)}

      />}</div> : null}
      </div>
      {
        (user.username === usernameConnected)? <div onClick={() => deleteTweet()}>
          <DeleteIcon
          src="/circle-xmark-solid.svg"
          alt="DeleteTweet"
          width={15}
          height={15}
          className={styles.btnDelete}
          onClick={() => setModify(!modify)}
        />
        </div> : null
      }
      </div>
    </div>
  );
};


export default Tweets;
