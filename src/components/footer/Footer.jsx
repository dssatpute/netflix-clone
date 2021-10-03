import React from "react";
import styles from '../footer/footer.module.css'
const  Links = [
  "FAQHelp",
  "Centre Account Media",
  "Centre Investor",
  "Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy Cookies",
  "Preferences Corporate",
  "Information Contact",
  "Test Legal",
  " Only on Netflix",
];
const Footer = () => {
  return <div className={styles.main}>
      <ul className={styles.ul}>
          {Links.map(link=><li className={styles.links}><a>{link}</a></li>)}
      </ul>
  </div>;
};

export default Footer;
