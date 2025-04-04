"use client"
import styles from "./page.module.css";
import IntroCard from "@/app/components/intro/intro-card";
// import LastfmCard from "@/app/components/lastfm/lastfm-card";
// import TestCard from "@/app/components/testing/test-card";
import LastfmCard from "@/app/components/lastfm/lastfm-card";
import Wallpaper from "@/app/components/wallpaper/wallpaper";
import Particles from "@/app/components/particles/particles";

export default function Home() {
  return (
    <div className={styles.page}>
      <Wallpaper />
      <Particles />
      <main className={styles.content}>
        <IntroCard/>
        <LastfmCard/>
      </main>
    </div>
  );
}

