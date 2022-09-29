import styles from "../../../styles/home/home-activity-tab.module.css";
import ActivityBlock from "./ActivityBlock";
import { mockedBlocks } from "../__mocks__";

const HomeActivityTab = () => {
  return (
    <div className={styles.activityTabWrapper}>
      {mockedBlocks.map((block) => {
        return <ActivityBlock key={block.title} block={block} />;
      })}
    </div>
  );
};

export default HomeActivityTab;
