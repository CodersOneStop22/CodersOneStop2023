import styles from "./pricing-card.module.css";

const PricingCard = ({
  price,
  price1,
  text200,
  subtitle,
  popular,
  showPopular,
  text2001,
  text2002,
  text2003,
  text2004,
}) => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.pricingtier}>
        <i className={styles.subtitle}>{subtitle}</i>
        <b className={styles.price}>{price}</b>
      </div>
      <div className={styles.pricingText}>
        <div
          className={styles.paragraph}
        >{`Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. `}</div>
      </div>
      <div className={styles.price1}>
        <b className={styles.price2}>{price1}</b>
        <i className={styles.yearly}>/yearly</i>
      </div>
      <div className={styles.text200Wrapper}>
        <b className={styles.text200}>{text200}</b>
      </div>
      <div className={styles.included}>
        <div className={styles.listItem200}>
          <img
            className={styles.filledIconscheckCircle}
            alt=""
            src="/filled-iconscheck-circle1.svg"
          />
          <div className={styles.text200}>{text2002}</div>
        </div>
        <div className={styles.listItem2001}>
          <img
            className={styles.filledIconscheckCircle1}
            alt=""
            src="/filled-iconscheck-circle2.svg"
          />
          <div className={styles.text2002}>{text2004}</div>
        </div>
        <div className={styles.listItem2001}>
          <img
            className={styles.filledIconscheckCircle1}
            alt=""
            src="/filled-iconscheck-circle2.svg"
          />
          <div className={styles.text2002}>{text2003}</div>
        </div>
        <div className={styles.listItem2001}>
          <img
            className={styles.filledIconscheckCircle1}
            alt=""
            src="/filled-iconscheck-circle2.svg"
          />
          <div className={styles.text2002}>{text2001}</div>
        </div>
      </div>
      <button className={styles.getstarted}>
        <div className={styles.getStarted}>Get Started</div>
      </button>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <button className={styles.popular}>
        {showPopular && <div className={styles.popular1}>{popular}</div>}
      </button>
    </div>
  );
};

export default PricingCard;
