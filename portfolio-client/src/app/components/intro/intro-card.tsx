import styles from "./intro-card.module.css"
import {roboto_bold, roboto_light} from "@/app/fonts/fonts";

export default function IntroCard() {
  return (
    <div className={styles.card}>
      <p className={`${styles.card_title} ${roboto_bold.className}`}>Mason Harniess</p>
      <p className={`${styles.card_body} ${roboto_light.className}`}>A First-Class Honours graduate from the University of Leicester. Enthusiastic about computer systems, networks, and programming. Currently working as an IT Support Technician at Keyence, utilising technical skills to support staff and deliver added value through IT projects.</p>
    </div>
  );
}