import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright2023}>
        Copyright © 2023. Powered by Art Curries.
      </div>
      <a className={styles.facebookF}>facebook-f</a>
      <a className={styles.instagram}>instagram</a>
    </div>
  );
};

export default Footer;