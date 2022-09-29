import VideoBlock from "./VideoBlock";
import styles from "../../../styles/messages/message-chat.module.css";

const StartMessaging = ({ setIsVideoSent, setNowDate }) => {
  return (
    <div className={styles.chatWrapper}>
      <div className={styles.userIcon}>AK</div>
      <div className={styles.chatSupHeader}>
        <div>Start your conversation with</div>
        <div className={styles.supHeaderName}>andriikulyk7</div>
      </div>
      <div className={styles.chatPrice}>
        You will pay <span>$25</span> for this message
      </div>
      <div className={styles.videoInfo}>
        <div>
          Tap <span>Video</span> button to upload your video.
        </div>
        <div>
          Video lenght limit is <span>30 seconds</span>
        </div>
      </div>
      <VideoBlock setIsVideoSent={setIsVideoSent} setNowDate={setNowDate} />
    </div>
  );
};

export default StartMessaging;
