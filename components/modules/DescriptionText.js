import styles from "../../styles/home/home-main.module.css";

export default function DescriptionText() {
  return (
    <div className={styles.userDesc}>
      <span className={styles.descText}>
        Hi! here to make dreamz come true. You can also request a tattoo design
        instead of msg...
        <button>
          <a src="#">See more</a>
        </button>
      </span>
    </div>
  );
}
