import React from "react";
import styles from "../../styles/messages/loader.module.css";

export default function Loader({ width = "64px", height = "64px", variant }) {
  return variant === "spiner" ? (
    <div className={styles.loaderButtonSpiner} style={{ width, height }}>
      <div className={styles.loaderSpiner}></div>
    </div>
  ) : (
    <div className={styles.loaderButton} style={{ width, height }}>
      <div className={styles.loader}></div>
    </div>
  );
}
