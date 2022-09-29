import React, { useEffect } from "react";
import Image from "next/image";
import Loader from "../../modules/Loader";
import { useVideoBlock } from "./useVideoBlock";
import styles from "../../../styles/messages/video-block.module.css";

const VideoBlock = ({ setIsVideoSent, setNowDate }) => {
  const { videoButtonCLick, filesContent, loading, isLoading } = useVideoBlock({
    setNowDate,
  });
  useEffect(() => {
    if (filesContent.length) {
      setTimeout(() => {
        setIsVideoSent(filesContent);
      }, 1000);
    }
  }, [filesContent, loading]);

  if (loading) {
    return null;
  }
  return (
    <div className={styles.videoBlockWrapper}>
      <div className={styles.videoBlock}>
        <button className={styles.messageButton}>
          <Image
            src="/images/file-image-svgrepo-com.svg"
            alt="message-icon"
            width="26"
            height="26"
          />
        </button>
        <button className={styles.messageButton}>
          <Image
            src="/images/msg-icon.svg"
            alt="message-icon"
            width="26"
            height="26"
          />
        </button>
        {isLoading ? (
          <Loader />
        ) : (
          <button className={styles.cameraButton} onClick={videoButtonCLick}>
            <Image
              src="/images/camera-icon.svg"
              alt="message-icon"
              width="30"
              height="30"
            />
          </button>
        )}
        <button className={styles.voiceButton}>
          <Image
            src="/images/microphone-icon.svg"
            alt="message-icon"
            width="16"
            height="23"
          />
        </button>
      </div>
    </div>
  );
};

export default VideoBlock;
