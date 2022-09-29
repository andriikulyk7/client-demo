import Image from "next/image";
import styles from "../../styles/home/home-nav.module.css";

const HomeNav = () => {
  return (
    <div className={styles.mainNav}>
      <div className={styles.navBlock}>
        <div className={styles.logoIcon}></div>
        <div className={styles.logoName}>client-demo</div>
      </div>
      <div className={styles.navBlock}>
        <div className={styles.navBell}>
          <Image
            src="/images/bell-icon.svg"
            alt="bell-icon"
            width="20"
            height="26"
          />
        </div>
        <div className={styles.navProfile}>Ji</div>
      </div>
    </div>
  );
};

export default HomeNav;
