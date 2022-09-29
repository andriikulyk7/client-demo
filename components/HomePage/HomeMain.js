import { useState } from "react";
import HomeActivityTab from "./HomeActivityTab/HomeActivityTab";
import DescriptionText from "../modules/DescriptionText";
import HomeTabsHandler from "./HomeTabsHandler";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import styles from "../../styles/home/home-main.module.css";

const HomeMain = () => {
  const [showIsTab, setIsShowTab] = useState(true);

  return (
    <div className={styles.homeMain}>
      <div className={styles.userLogo}>AK</div>
      <div className={styles.userNameBlock}>
        <div className={styles.userName}>andriikulyk7</div>
        <div className={styles.userRating}>
          <ThumbUpOffAltIcon sx={{ color: "#434343" }} />
          <span>94%</span>
        </div>
      </div>
      <DescriptionText />
      <HomeTabsHandler setIsShowTab={setIsShowTab} />
      <hr className={styles.hr} />
      {showIsTab ? <HomeActivityTab /> : <div>coming soon..</div>}
    </div>
  );
};

export default HomeMain;
