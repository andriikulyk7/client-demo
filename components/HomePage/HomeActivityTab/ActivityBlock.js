import styles from "../../../styles/home/home-activity-tab.module.css";
import Image from "next/image";
import Link from "next/link";

const ActivityBlock = ({ block }) => {
  const { icon, title, price, buttonText, buttonColor, priceFrom, timePeriod } =
    block;

  return (
    <div className={styles.blockItem}>
      <Image src={icon} alt="block-icon" width="21" height="21" />
      <div className={styles.blockTitle}>{title}</div>
      <div className={styles.blockPrice}>
        {priceFrom} <span>{price}</span> {timePeriod}
      </div>
      <Link href="/private-messages">
        <button
          className={styles.blockButton}
          style={{ background: buttonColor }}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default ActivityBlock;
