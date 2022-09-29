import Image from "next/image";
import MessagesModal from "./MessagesModal";
import ConfirmVideoBlock from "./ConfirmVideoBlock";
import ToInboxBlock from "./ToInboxBlock";
import { useMessagesBlock } from "./useMessagesBlock";
import styles from "../../../styles/messages/send-messages.module.css";

const MessagesBlock = ({ setIsVideoSent, isVideoSent, nowDate }) => {
  const {
    isOpen,
    setIsOpen,
    isPreModalLoading,
    goBack,
    handleOpen,
    isPaymentComplete,
    setIsPaymentComplete,
  } = useMessagesBlock({ setIsVideoSent });

  if (!isVideoSent[0]?.content) return null;

  console.log(isVideoSent[0]);
  return (
    <div className={styles.chatWrapper}>
      <div className={styles.chatInfo}>
        You are going to send a message to <span>andriikulyk7</span>
      </div>
      <div className={styles.messagesArea}>
        <div className={styles.messageItemRight}>
          <div className={styles.messageImageWrapper}>
            <div className={styles.messageImage}>
              <Image
                src={isVideoSent[0].content}
                alt={isVideoSent[0].name}
                layout="fill"
                objectFit="contain"
                display="block"
                objectPosition={"right"}
              />
            </div>
          </div>
          <div className={styles.messageSender}>Ji</div>
        </div>
        {nowDate && <div className={styles.messageImageDate}>{nowDate}</div>}
      </div>
      <div>
        <div className={styles.chatButtonBlock}>
          {isPaymentComplete ? (
            <ToInboxBlock />
          ) : (
            <ConfirmVideoBlock
              isPreModalLoading={isPreModalLoading}
              goBack={goBack}
              handleOpen={handleOpen}
            />
          )}
        </div>
      </div>
      <MessagesModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsVideoSent={setIsVideoSent}
        setIsPaymentComplete={setIsPaymentComplete}
      />
    </div>
  );
};

export default MessagesBlock;
