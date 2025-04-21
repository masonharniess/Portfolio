import DefaultCard from "@/app/components/default-card/default-card";
import {roboto_bold} from "@/app/fonts/fonts";
import styles from "./experience-card.module.css";

export default function ExperienceCard() {
  return (
    <DefaultCard
      title="Work Experience"
      titleClassName={roboto_bold.className}
      bodyClassName={roboto_bold.className}
    >
      <div className={styles.jobs_list}>
        <div className={styles.job_item}>
          <p>IT Support Technician</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Keyence, Aug. 2024—Present</p>
        </div>

        <div className={styles.job_item}>
          <p>Teaching Assistant & Marker</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>University of Leicester, Feb—March 2024</p>
        </div>

        <div className={styles.job_item}>
          <p>Customer Service & Machine Operative</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Hirst Amusements, July–Oct. 2022</p>
        </div>

        <div className={styles.job_item}>
          <p>Administrative Assistant </p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}></p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Oakwood Solicitors, Dec. 2019</p>
        </div>

        <div className={styles.job_item}>
          <p>Kitchen Porter</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Cucina Café & Restaurant, June–Sep. 2019</p>
        </div>
      </div>

    </DefaultCard>
  );
}