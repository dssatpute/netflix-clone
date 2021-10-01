import React from "react";
import styles from "../features/features.module.css";
import video_one from "../features/assets/feature_one.m4v";
import feature_two_image from "../features/assets/feature_two.jpg";
import feature_three_image from "../features/assets/feature_three.png";
import video_in from "../features/assets/video-devices-in.m4v";
// import video_three from "../features/assets/feature_three.m4v";

const features = [
  {
    id: Math.round(Math.random(), 2),
    title: "Enjoy on your TV.",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    videoName: "video_one",
  },
  {
    id: Math.round(Math.random(), 2),
    title: "Download your shows to watch offline.",
    description:
      "Save your favourites easily and always have something to watch.",
    videoName: "video_one",
  },
  {
    id: Math.round(Math.random(), 2),
    title: "Watch everywhere.",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  },
];
const Features = () => {
  return (
    <div className={styles.main}>
      <div className={styles.feature_common}>
        <div className={styles.feature_card}>
          <h2 className={styles.title}>{features[0].title}</h2>
          <p className={styles.description}>{features[0].description}</p>
        </div>
        <div>
          <video autoPlay playsInline muted loop>
            <source src={video_one} type="video/mp4"></source>
          </video>
        </div>
      </div>

      <div className={styles.feature_common}>
        <div>
          <img src={feature_two_image}></img>
        </div>
        <div className={styles.feature_card}>
          <h2 className={styles.title}>{features[1].title}</h2>
          <p className={styles.description}>{features[1].description}</p>
        </div>
      </div>

      <div className={styles.feature_common}>
        <div className={styles.feature_card}>
          <h2 className={styles.title}>{features[2].title}</h2>
          <p className={styles.description}>{features[2].description}</p>
        </div>
        <div >
          <div className={styles.in_image}>
            <img
              style={{ position: "relative", zIndex: "2" }}
              src={feature_three_image}
            />
            <video
              style={{
                position: "absolute",
                height: "200px",
                marginLeft: "145px",
                marginTop: "60px",
                zIndex: "1",
              }}
              autoPlay
              playsInline
              muted
              loop
            >
              <source src={video_in} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Features;
