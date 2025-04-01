import styles from "./page.module.css";
import MainSection from "@/app/components/mainSection/mainSection";
// import LastfmCard from "@/app/components/lastfm/lastfm-card";
// import TestCard from "@/app/components/testing/test-card";


export default function Home() {
  return (
    <div className={styles.page}>
      <img className={styles.background}/>
      <main className={styles.main}>

        <MainSection/>
        <MainSection/>
        <MainSection/>
        <MainSection/>
        <MainSection/>
        <MainSection/>
        <MainSection/>
        {/*/!*<TestCard/>*!/*/}
        {/*/!*<LastfmCard/>*!/*/}
      </main>
    </div>
  );
}

