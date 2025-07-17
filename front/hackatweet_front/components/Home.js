import styles from "../styles/Home.module.css";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

function Home() {
  console.log("Composant Home monté !");
  return (
    <div>
      <div>Ici</div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h4 className={styles.exempleDeNomDeClass}>Titre</h4>
        <button>prout</button>
      </main>
    </div>
  );
}

export default Home;
