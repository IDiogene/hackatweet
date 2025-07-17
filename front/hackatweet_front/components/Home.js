import styles from "../styles/Home.module.css";
import Image from "next";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

function Home() {
  console.log("Composant Home monté !");
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

        <div className={styles.partCenter}>prout</div>

        <div className={styles.partRight}>prout</div>
      </main>
    </div>
  );
}

export default Home;
