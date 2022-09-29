import ActivityLabel from "./ActivityLabel";
import Head from "next/head";
import { mockedActivities } from "./__mocks__";
import styles from "../../styles/messages/messages-header.module.css";

const Main = () => {
  return (
    <div>
      <Head></Head>
      <div className={styles.mainHeader}>
        <div className={styles.userIcon}>AK</div>
        <div className={styles.responceTitle}>Get response from</div>
        <div className={styles.headerName}>andriikulyk7</div>
      </div>
      <div className={styles.activitiesWrapper}>
        <div className={styles.activitiesAlert}>Private Message Pricing</div>
        <div className={styles.activitiesBlock}>
          {mockedActivities.map((activity) => {
            return <ActivityLabel key={activity.name} activity={activity} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
