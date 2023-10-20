import styles from "./pricing-neck.module.css";

const PricingNeck = () => {
  return (
    <div className={styles.pricingNeck}>
      <div className={styles.simpleTransparentPricingParent}>
        <b className={styles.simpleTransparentPricingContainer}>
          <span>{`Simple, transparent `}</span>
          <span className={styles.pricing}>pricing</span>
        </b>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
          vel venenatis eu sit massa volutpat.
        </div>
      </div>
      <div className={styles.switch}>
        <div className={styles.monthly}>Monthly</div>
        <img
          className={styles.radiomonthlyannuallyIcon}
          alt=""
          src="/radiomonthlyannually.svg"
        />
        <div className={styles.monthly}>Annually</div>
      </div>
    </div>
  );
};

export default PricingNeck;
