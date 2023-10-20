import styles from "./home-mainsection.module.css";

const HomeMainSection = () => {
  return (
    <div className={styles.homeMainSection}>
      <div className={styles.homeNeck}>
        <div className={styles.unlockYourCodingContainer}>
          <span>{`Unlock Your Coding `}</span>
          <span className={styles.potential}>Potential</span>
          <span>{` with `}</span>
          <span className={styles.potential}>Coder’s</span>
          <span> One Stop</span>
        </div>
      </div>
      <div className={styles.getCodingAssistanceAndImprWrapper}>
        <div className={styles.getCodingAssistance}>
          Get coding assistance and improve your skills with our comprehensive
          resources, tutorials, and community support. we have something for
          everyone to take their coding to the next level.
        </div>
      </div>
      <input
        className={styles.searchBar}
        value="Search"
        placeholder="Learn Python, Java, C++"
        type="text"
      />
      <div className={styles.iconheader}>
        <a className={styles.image62Parent}>
          <img className={styles.image62Icon} alt="" src="/image-62@2x.png" />
          <i className={styles.learning}>Learning</i>
        </a>
        <a className={styles.image63Parent}>
          <img className={styles.image63Icon} alt="" src="/image-63@2x.png" />
          <i className={styles.projects}>Projects</i>
        </a>
        <a className={styles.image64Parent}>
          <img className={styles.image64Icon} alt="" src="/image-64@2x.png" />
          <i className={styles.services}>Services</i>
        </a>
        <a className={styles.image65Parent}>
          <img className={styles.image64Icon} alt="" src="/image-65@2x.png" />
          <i className={styles.pricing}>Pricing</i>
        </a>
      </div>
      <img className={styles.pngegg1Icon} alt="" src="/pngegg-1@2x.png" />
      <img className={styles.homeMainSectionChild} alt="" src="/vector-3.svg" />
    </div>
  );
};

export default HomeMainSection;
