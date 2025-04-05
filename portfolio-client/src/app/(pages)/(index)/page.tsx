"use client"
import styles from "./page.module.css";
import IntroCard from "@/app/components/intro/intro-card";
import LastfmCard from "@/app/components/lastfm/lastfm-card";
import Wallpaper from "@/app/components/wallpaper/wallpaper";
import Particles from "@/app/components/particles/particles";
import ExperienceCard from "@/app/components/education/experience-card";

export default function Home() {
  return (
    <div className={styles.page}>
      <Wallpaper />
      <Particles />
      <main className={styles.content}>
        <IntroCard/>
        <div className={styles.dual_column}>
          <ExperienceCard/>
          <LastfmCard/>
        </div>
      </main>
    </div>
  );
}

