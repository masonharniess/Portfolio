import styles from "./mainSection.module.css"
import {roboto_bold, roboto_light} from "@/app/fonts/fonts";

export default function MainSection() {
  return (
    <div className={styles.placeholder_card}>
      <p className={`${styles.placeholder_card_title} ${roboto_bold.className}`}>Mason Harniess</p>
      <p className={`${styles.placeholder_card_body} ${roboto_light.className}`}>Studied Computer Science at the University of Leicester, achieving First-Class Honours. Enthusiastic about computer systems, networks, and programming. Currently working as an IT Support Technician at Keyence, utilising technical skills to support staff and deliver added value through IT projects.</p>
    </div>
  );
}