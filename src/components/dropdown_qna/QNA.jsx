import React, { useState } from "react";
import styles from "../dropdown_qna/qna.module.css";

const QNA = () => {
  const [activeOne, setActiveOne] = useState(false);
  const openTextFirst = () => {
    setActiveOne(!activeOne);
  };
  const [activeTwo, setActiveTwo] = useState(false);
  const openTextSecond = () => {
    setActiveTwo(!activeTwo);
  };
  const [activeThree, setActiveThree] = useState(false);
  const openTextThird = () => {
    setActiveThree(!activeThree);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main_list}>
        <div>
          <h1 style={{textAlign:'center '}}>Frequently Asked Questions</h1>
        </div>
        <button className={styles.dropdown_button} onClick={openTextFirst}>
          What is Netflix
        </button>
        <div
          className={!activeOne ? styles.hide_text :styles.dropdown_text}
        >
          <span>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
            <br></br>
            <br></br>
            You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always something
            new to discover, and new TV shows and movies are added every week!
          </span>
        </div>

        <div>
          <button className={styles.dropdown_button} onClick={openTextSecond}>
            How much does Netflix cost?
          </button>
          <div
            className={!activeTwo ? styles.hide_text :styles.dropdown_text}
          >
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>

        <div>
          <button className={styles.dropdown_button} onClick={openTextThird}>
            Where can I watch
          </button>
          <div
            className={!activeThree ? styles.hide_text :styles.dropdown_text}
          >
            <span>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </span>
            <br></br>
            <br></br>
            <span>
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QNA;
