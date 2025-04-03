"use client"
import styles from "./page.module.css";
import IntroCard from "@/app/components/intro/intro-card";
// import LastfmCard from "@/app/components/lastfm/lastfm-card";
// import TestCard from "@/app/components/testing/test-card";
import LastfmCard from "@/app/components/lastfm/lastfm-card";


export default function Home() {
  return (
    <div className={styles.page}>
      <img className={styles.background}/>
      <main className={styles.main}>
        <IntroCard/>
        <LastfmCard/>
      </main>
    </div>
  );
}

