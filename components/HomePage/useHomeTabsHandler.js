import { useState } from "react";
import styles from "../../styles/home/home-main.module.css";

export function useHomeTabsHandlerJs({ setIsShowTab }) {
  const [activityTabColor, setActivityTabColor] = useState("#1890FF");
  const [playTabColor, setPlayTabColor] = useState("#8C8C8C");
  const [activityTabStyles, setActivityTabStyles] = useState(
    `${styles.tabsItemInner} ${styles.active}`
  );
  const [playTabStyles, setPlayTabStyles] = useState(`${styles.tabsItemInner}`);

  const tabsHandler = (tabName) => {
    if (tabName === "activity") {
      setActivityTabColor("#1890FF");
      setPlayTabColor("#8C8C8C");
      setActivityTabStyles(`${styles.tabsItemInner} ${styles.active}`);
      setPlayTabStyles(`${styles.tabsItemInner}`);
      setIsShowTab(true);
    } else {
      setActivityTabColor("#8C8C8C");
      setPlayTabColor("#1890FF");
      setActivityTabStyles(`${styles.tabsItemInner}`);
      setPlayTabStyles(`${styles.tabsItemInner} ${styles.active}`);
      setIsShowTab(false);
    }
  };

  const handleActivity = () => {
    tabsHandler("activity");
  };

  const handlePlay = () => {
    tabsHandler("play");
  };

  return {
    activityTabColor,
    playTabColor,
    activityTabStyles,
    playTabStyles,
    handleActivity,
    handlePlay,
  };
}
