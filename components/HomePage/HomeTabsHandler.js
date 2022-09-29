import styles from "../../styles/home/home-main.module.css";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { useHomeTabsHandlerJs } from "./useHomeTabsHandler";

const HomeTabsHandler = (props) => {
  const {
    activityTabColor,
    activityTabStyles,
    playTabColor,
    playTabStyles,
    handleActivity,
    handlePlay,
  } = useHomeTabsHandlerJs(props);

  return (
    <div className={styles.homeMainTabs}>
      <div className={styles.tabsBlock}>
        <div className={styles.tabsItem}>
          <div className={activityTabStyles} onClick={handleActivity}>
            <GridViewOutlinedIcon sx={{ color: activityTabColor }} />
          </div>
        </div>
        <div className={styles.tabsItem}>
          <div className={playTabStyles} onClick={handlePlay}>
            <PlayCircleOutlineOutlinedIcon sx={{ color: playTabColor }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTabsHandler;
