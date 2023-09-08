import Head from "next/head";
import styles from "./main-header.module.css";


const MainHeader = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.homeWrapper}>
          <button className={styles.home}>Home</button>
        </div>
        <button className={styles.learningsWrapper}>
          <div className={styles.learnings}>Learnings</div>
        </button>
        <button className={styles.projectsWrapper}>
          <div className={styles.learnings}>Projects</div>
        </button>
        <button className={styles.servicesWrapper}>
          <div className={styles.learnings}>Services</div>
        </button>
        <button className={styles.pricingWrapper}>
          <i className={styles.pricing}>Pricing</i>
        </button>
      </div>
      <div className={styles.groupParent}>
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
        <div className={styles.codersParent}>
          <b className={styles.coders}>Coder’s</b>
          <i className={styles.oneStop}>One Stop</i>
        </div>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <i className={styles.moon}>moon</i>
            <i className={styles.sunBright}>sun-bright</i>
          </div>
        </div>
        <button className={styles.register}>Register</button>
        <div className={styles.signInWrapper}>
          <button className={styles.home}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
