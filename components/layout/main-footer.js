import styles from "./main-footer.module.css";
const MainFooter = () => {
  return (
    <div className={styles.bigFooterParent}>
      <div className={styles.bigFooter}>
        <div className={styles.leftIcon}>
          <div className={styles.leftIconInner}>
            <div className={styles.groupParent}>
              <div className={styles.codersParent}>
                <b className={styles.coders}>Coder’s</b>
                <i className={styles.oneStop}>One Stop</i>
              </div>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
            </div>
          </div>
          <div className={styles.aliquamOrciA}>
            Aliquam orci a nullam tempor sapien gravida donec enim ipsum porta
            justo velna an auctor undo congue magna laoreet augue sapien
          </div>
        </div>
        <div className={styles.company}>
          <div className={styles.navListItem}>
            <i className={styles.company1}>Company</i>
            <div className={styles.careersParent}>
              <a className={styles.careers}>Careers</a>
              <a className={styles.careers}>From the Blog</a>
              <a className={styles.careers}>Privacy Policy</a>
              <a className={styles.careers}>Terms of Use</a>
            </div>
          </div>
        </div>
        <div className={styles.learn}>
          <div className={styles.navListItem1}>
            <i className={styles.learn1}>Learn</i>
            <div className={styles.careersParent}>
              <a className={styles.careers}>DSA</a>
              <a className={styles.careers}>Data Structures</a>
              <a className={styles.careers}>Algorithms</a>
              <a className={styles.careers}>Languages</a>
            </div>
          </div>
        </div>
        <input
          className={styles.stayintouch}
          type="email"
          defaultValue="Your email address"
          placeholder="Stay in Touch"
        />
      </div>
    </div>
  );
};

export default MainFooter;
