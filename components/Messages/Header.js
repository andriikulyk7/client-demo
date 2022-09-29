import styles from "../../styles/messages/messages-header.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";

const Header = ({ backLink, headerText, titleColor, backgroundColor }) => {
  return (
    <div className={styles.header} style={{ background: backgroundColor }}>
      <div className={styles.backLink}>
        <Link href={backLink}>
          <ArrowBackIosIcon sx={{ color: titleColor }} />
        </Link>
      </div>
      <div className={styles.headerTitle} style={{ color: titleColor }}>
        {headerText}
      </div>
      <div className={styles.menuLink}>
        <MoreVertIcon sx={{ color: titleColor }} />
      </div>
    </div>
  );
};

export default Header;
