import Head from "next/head";
import HomeNav from "../components/HomePage/HomeNav";
import HomeMain from "../components/HomePage/HomeMain";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>client-demo</title>
        <meta name="starting page" content="app home page" />
      </Head>
      <main className={styles.main}>
        <HomeNav />
        <HomeMain />
      </main>
    </div>
  );
}
