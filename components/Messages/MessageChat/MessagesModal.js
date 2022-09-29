import Image from "next/image";
import { Box, Modal } from "@mui/material";
import Loader from "../../modules/Loader";
import { useMessagesModal } from "./useMessagesModal";
import styles from "../../../styles/messages/send-messages.module.css";

const MessagesModal = ({ isOpen, setIsOpen, setIsPaymentComplete }) => {
  const { isLoading, isAccess, style, handleLoading, handleclose } =
    useMessagesModal({ setIsOpen, setIsPaymentComplete });

  return (
    <Modal
      open={isOpen}
      onClose={handleclose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        {isLoading ? (
          <div className={styles.modalWrapper}>
            {isAccess ? (
              <div>
                <Image
                  src="/images/access-icon.svg"
                  alt="access-icon"
                  width="46"
                  height="46"
                />
              </div>
            ) : (
              <Loader variant={"spiner"} />
            )}
          </div>
        ) : (
          <div className={styles.modalWrapper}>
            <p className={styles.messageTitle}>You are going to pay</p>
            <p className={styles.modalMessagePriceText}>$ 25.00 USD</p>
            <div className={styles.modalInfoBlock}>
              <p className={styles.modalInfoBlockText}>to</p>
              <div className={styles.modalInfoPerson}>Ol</div>
              <p className={styles.modalInfoBlockText}>andriikulyk7 for</p>
              <Image
                src="/images/message-gray-icon.svg"
                alt="message-icon"
                width="26"
                height="26"
              />
              <p className={styles.modalInfoBlockText}>private message</p>
            </div>
            <p className={styles.modalText}>
              Note: No worries, your money will be refunded if there is a 7 days
              quiteness on the creator side.
            </p>
            <div className={styles.modalBtnWrapper}>
              <div className={styles.modalAppleBtn} onClick={handleLoading}>
                Pay with Apple Pay
              </div>
              <div className={styles.modalBtn}>Pay with Credit Card</div>
              <div className={styles.modalBtn}>Other options</div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default MessagesModal;
