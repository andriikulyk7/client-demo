import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import styles from "../../../styles/messages/send-messages.module.css";

const ToInboxBlock = () => {
  return (
    <div className={styles.toInboxBlock}>
      <ThumbUpOffAltIcon sx={{ color: "#595959" }} />
      <div>
        <div className={styles.inboxInfo}>
          Your message was sent to <span>andriikulyk7.</span>
        </div>
        <div className={styles.inboxInfo}>
          Average respond time is <span>20 minutes.</span>
        </div>
      </div>
      <button className={styles.toInboxButton}>Go to Inbox</button>
    </div>
  );
};

export default ToInboxBlock;
