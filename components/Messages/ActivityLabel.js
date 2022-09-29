import Link from "next/link";
import styles from "../../styles/messages/activity-label.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ActivityLabel = ({ activity }) => {
  const { name, price } = activity;

  return (
    <div className={styles.activityLabel}>
      <div className={styles.activityName}>{name}</div>
      <Link href="/private-messages/message-chat">
        <div className={styles.activityPrice}>
          {price}
          <ArrowForwardIosIcon fontSize="small" sx={{ color: "#8C8C8C" }} />
        </div>
      </Link>
    </div>
  );
};

export default ActivityLabel;
