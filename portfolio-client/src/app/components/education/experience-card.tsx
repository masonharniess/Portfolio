import Card from "@/app/components/card/card";
import {roboto_bold} from "@/app/fonts/fonts";
import styles from "./experience-card.module.css";

export default function ExperienceCard() {
  return (
    <Card
      title="Work Experience"
      titleClassName={roboto_bold.className}
      bodyClassName={roboto_bold.className}
    >
      <div className={styles.jobs_list}>
        <div className={styles.job_item}>
          <p>IT Support Technician</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Aug. 2024—Present</p>
        </div>

        <div className={styles.job_item}>
          <p>Teaching Assistant & Marker</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Feb. 2024—March 2024</p>
        </div>

        <div className={styles.job_item}>
          <p>Customer Service Assistant & Machine Operative</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>July 2022–Oct. 2022</p>
        </div>

        <div className={styles.job_item}>
          <p>Assistant Solicitor & Administrative Assistant </p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Dec. 2019</p>
        </div>

        <div className={styles.job_item}>
          <p>Kitchen Porter</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>June 2019–Sep. 2019</p>
        </div>
      </div>

    </Card>
  );
}