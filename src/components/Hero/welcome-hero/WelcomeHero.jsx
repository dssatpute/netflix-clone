import React from "react";
import styles from "../hero.module.css";
const WelcomeHero = () => {
  return (
    <div className={styles.welcome_hero}>
      <div className={styles.intro}>
        <h1 className={styles.header}>Unlimited movies, TV shows and more.</h1>
        <p className={styles['para-one']}>Watch anywhere, cancel anytime.</p>
        <p className={styles['para-two']}>Ready to watch, enter your email and start the membership!</p>
      </div>
      <div className={styles.email_button}>
        <input
         className={styles.email}
          type="text"
          placeholder="Enter your email address"
        ></input>
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

export default WelcomeHero;
