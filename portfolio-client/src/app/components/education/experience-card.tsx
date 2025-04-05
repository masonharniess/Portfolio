import styles from "./experience-card.module.css"
import {roboto_bold, roboto_light} from "@/app/fonts/fonts";

export default function ExperienceCard() {
  return (
    <div className={styles.card}>
      <div className={styles.title_space}>
        <p className={`${styles.card_title} ${roboto_bold.className}`}>Work Experience</p>
      </div>
      <div className={`${styles.card_body} ${roboto_bold.className}`}>
        <p className={styles.job_title}>IT Support Technician</p>
        <p className={styles.job_dates}>Aug. 2024—Present</p>
      </div>
    </div>
  )
}