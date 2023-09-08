import StayInTouchForm from "../footer/stay-in-touch-form";
import styles from "./main-footer.module.css";
const MainFooter = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.leftIconParent}>
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
        <div className={styles.navListItemWrapper}>
          <div className={styles.navListItem}>
            <i className={styles.company}>Company</i>
            <div className={styles.careersParent}>
              <a
                className={styles.careers}
                href="https://artcurries.com/codersonestop2/#"
                target="_blank"
              >
                Careers
              </a>
              <a className={styles.fromTheBlog}>From the Blog</a>
              <a className={styles.fromTheBlog}>Privacy Policy</a>
              <a className={styles.fromTheBlog}>Terms of Use</a>
            </div>
          </div>
        </div>
        <div className={styles.navListItemContainer}>
          <div className={styles.navListItem1}>
            <i className={styles.learn}>Learn</i>
            <div className={styles.careersParent}>
              <a className={styles.fromTheBlog}>DSA</a>
              <a className={styles.fromTheBlog}>Data Structures</a>
              <a className={styles.fromTheBlog}>Algorithms</a>
              <a className={styles.fromTheBlog}>Languages</a>
            </div>
          </div>
        </div>
        <StayInTouchForm />
        <div className={styles.footer}>
          <div className={styles.copyright2023}>
            Copyright © 2023. Powered by Art Curries.
          </div>
          <a className={styles.facebookF}>facebook-f</a>
          <a className={styles.instagram}>instagram</a>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;