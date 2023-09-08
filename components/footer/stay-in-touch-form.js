import styles from "./stay-in-touch-form.module.css";
const StayInTouchForm = () => {
  return (
    <div className={styles.stayintouch}>
      <div className={styles.stayInTouchWrapper}>
        <i className={styles.stayInTouch}>Stay in Touch</i>
      </div>
      <input
        className={styles.stayintouchChild}
        type="email"
        placeholder="Your email address"
      />
      <button className={styles.subscribeWrapper}>
        <div className={styles.subscribe}>Subscribe</div>
      </button>
    </div>
  );
};

export default StayInTouchForm;