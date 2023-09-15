import Head from "next/head";
import styles from "./main-header.module.css";


const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
        <div className={styles.codersParent}>
          <b className={styles.coders}>Coder’s</b>
          <i className={styles.oneStop}>One Stop</i>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.homeWrapper}>
          <div className={styles.coders}>Home</div>
        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.coders}>Learnings</div>
        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.coders}>Projects</div>
        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.coders}>Services</div>
        </div>
        <div className={styles.homeWrapper}>
          <i className={styles.pricing}>Pricing</i>
        </div>
      </nav>
      <div className={styles.signinregister}>
      <input className={styles.dark} checked={true} type="radio" />
      <button className={styles.register}>
          <div className={styles.signIn}>Register</div>
        </button>
        
      <button >
        <div className={styles.signin}>
          <div className={styles.signIn}>Sign In</div>
        </div>
      </button>
      </div>
    </header>
  );
};

export default MainHeader;