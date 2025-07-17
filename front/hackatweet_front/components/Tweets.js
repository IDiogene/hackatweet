import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { addBookmark, removeBookmark } from "../reducers/bookmarks";
// import {} from "../reducers/hiddenArticles";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Tweets = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          onClick={() => alert("Ici Like")}
          icon={faBookmark}
          style={iconStyle}
          className={styles.bookmarkIcon}
        />
        <FontAwesomeIcon
          onClick={() => alert("Ici Supp si propre tweet")}
          icon={faEyeSlash}
          style={iconStyle}
          className={styles.faEyeSlashIcon}
        />
      </div>
      <h4 style={{ textAlign: "right" }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <Image
        src="photo-profil.JPG"
        alt={props.avatat}
        width={600}
        height={314}
      />
      <p>{props.description}</p>
    </div>
  );
};

export default Tweets;
