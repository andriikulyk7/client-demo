import { useState } from "react";
import MainLayout from "../../../components/modules/MainLayout";
import StartMessaging from "../../../components/Messages/MessageChat/StartMessaging";
import MessagesBlock from "../../../components/Messages/MessageChat/MessagesBlock";
import { navigation } from "../../../utils";
import styles from "../../../styles/messages/message-chat.module.css";

const MessageChat = () => {
  const [isVideoSent, setIsVideoSent] = useState(false);
  const [nowDate, setNowDate] = useState(false);
  return (
    <MainLayout
      title="Chat"
      metaName="chat page"
      metaContent="privete messages chat"
      backLink={navigation.private_messages}
      headerText="andriikulyk7"
    >
      <hr className={styles.hr} />
      {isVideoSent ? (
        <MessagesBlock
          setIsVideoSent={setIsVideoSent}
          isVideoSent={isVideoSent}
          nowDate={nowDate}
        />
      ) : (
        <StartMessaging
          setIsVideoSent={setIsVideoSent}
          setNowDate={setNowDate}
        />
      )}
    </MainLayout>
  );
};

export default MessageChat;
