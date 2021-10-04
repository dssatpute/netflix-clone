import React from 'react';
import styles from './hero.module.css'
import WelcomeHero from './welcome-hero/WelcomeHero';
import main_img from './assets/main.jpg'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.image_container}>
                <img src={main_img} alt="" srcset="" />    
            </div>
             <WelcomeHero/>
           
        </div>
    );
}

export default Hero;
