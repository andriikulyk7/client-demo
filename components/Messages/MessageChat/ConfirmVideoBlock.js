import Image from "next/image";
import Loader from "../../modules/Loader";
import styles from "../../../styles/messages/send-messages.module.css";

const ConfirmVideoBlock = ({ isPreModalLoading, goBack, handleOpen }) => {
  return (
    <div className={styles.chatButtonBlock}>
      <div className={styles.chatButtonBlockWrapper}>
        <div className={styles.chatTips}>
          <div>
            Confirm <span>if this is the correct video.</span>
          </div>
          <div>If not - go back and try again.</div>
        </div>
        <div className={styles.chatButtons}>
          <button className={styles.backButton} onClick={goBack}>
            <Image
              src="/images/back-video-arrow.svg"
              alt="message-icon"
              width="12"
              height="13"
            />
          </button>
          {isPreModalLoading ? (
            <Loader width="80px" height="80px" />
          ) : (
            <button className={styles.okayButton} onClick={handleOpen}>
              <Image
                src="/images/complete-video-icon.svg"
                alt="message-icon"
                width="22.5"
                height="18"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmVideoBlock;
