import Head from "next/head";
import Header from "../Messages/Header";
import styles from "../../styles/home.module.css";

const MainLayout = ({
  children,
  title,
  metaName,
  metaContent,
  backLink,
  headerText,
  backgroundColor,
  titleColor,
}) => {
  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>{title}</title>
        <meta name={metaName} content={metaContent} />
      </Head>
      <Header
        backLink={backLink}
        titleColor={titleColor}
        backgroundColor={backgroundColor}
        headerText={headerText}
      />
      <main style={{ padding: "0" }}>{children}</main>
    </div>
  );
};

export default MainLayout;
