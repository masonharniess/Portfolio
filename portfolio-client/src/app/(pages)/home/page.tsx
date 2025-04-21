"use client"
import styles from "./page.module.css";
import IntroductionCard from "@/app/components/introduction-card/introduction-card";
import MusicCard from "@/app/components/music-card/music-card";
import BackgroundWallpaper from "@/app/components/background-wallpaper/background-wallpaper";
import ParticlesEffect from "@/app/components/background-wallpaper/particles-effect/particles-effect";
import EducationCard from "@/app/components/education-card/education-card";
import ExperienceCard from "@/app/components/experience-card/experience-card";

export default function Home() {
  return (
    <div className={styles.page}>
      <BackgroundWallpaper />
      <ParticlesEffect />
      <main className={styles.content}>
        <IntroductionCard/>
        <div className={styles.dual_column}>
          <ExperienceCard/>
          <EducationCard/>
        </div>
        <MusicCard/>
      </main>
    </div>
  );
}

