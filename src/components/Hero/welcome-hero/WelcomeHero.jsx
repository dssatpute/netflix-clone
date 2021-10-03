import React from "react";
import styles from "../hero.module.css";
const WelcomeHero = () => {
  return (
    <div className={styles.welcome_hero}>
      <h1 style={{ marginTop: "50px", fontSize: "3rem", textAlign: "center" }}>
        Unlimited movies, TV shows and more.
      </h1>
      <p style={{ marginTop: "-10px", fontSize: "1.5rem" }}>
        Watch anywhere, cancel anytime.
      </p>
      <p style={{fontSize:'1.3rem',textAlign:'center'}}>Ready to watch, enter your email and start the membership!</p>
      <div className={styles.email_button}>
        <input
          style={{ width: "300px", height: "40px" ,borderRadius:'10px',border:'none',textAlign:'center'}}
          type="text"
          placeholder="Enter your email address"
        ></input>
        <button
          style={{
            width: "200px",
            height: "45px",
            backgroundColor: "#e50914",
            color: "wheat",
            fontSize: "1rem",
            borderRadius: "10px",
            border:'none',
            cursor:'pointer'
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeHero;
