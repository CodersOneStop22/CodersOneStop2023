import styles from "./feedback.module.css";
const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedbackParent}>
        <div className={styles.feedback1}>
          <b className={styles.feedbackAndQueries}>Feedback and Queries</b>
          <input
            className={styles.issue}
            type="text"
            placeholder="Select Issue *"
          />
          <input
            className={styles.contact}
            type="number"
            placeholder="Contact Number"
          />
          <input
            className={styles.contact}
            type="email"
            placeholder="Email Address *"
          />
          <textarea
            className={styles.dropyourquery}
            placeholder="Drop your feedback/query "
          />
          <button className={styles.btnsubmit}>
            <div className={styles.submit}>Submit</div>
          </button>
        </div>
        <div className={styles.address}>
          <div className={styles.addressParent}>
            <b className={styles.address1}>Address</b>
            <i className={styles.ranchviewDrRichardson}>
              3891 Ranchview Dr. Richardson, California 62639
            </i>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
