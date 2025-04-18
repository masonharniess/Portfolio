"use client"
import styles from "./page.module.css";
import PersonalSummary from "@/app/components/intro/personal-summary";
import LastfmCard from "@/app/components/lastfm/lastfm-card";
import Wallpaper from "@/app/components/wallpaper/wallpaper";
import Particles from "@/app/components/particles/particles";
import EducationCard from "@/app/components/education/education-card";
import ExperienceCard from "@/app/components/experience/experience-card";

export default function Home() {
  return (
    <div className={styles.page}>
      <Wallpaper />
      <Particles />
      <main className={styles.content}>
        <PersonalSummary/>
        <div className={styles.dual_column}>
          <ExperienceCard/>
          <EducationCard/>
        </div>
        <LastfmCard/>
      </main>
    </div>
  );
}

