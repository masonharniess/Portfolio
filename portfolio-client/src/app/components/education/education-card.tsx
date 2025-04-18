import Card from "@/app/components/card/card";
import {roboto_bold} from "@/app/fonts/fonts";
import styles from "./education-card.module.css";

export default function EducationCard() {
  return (
    <Card
      title="Education"
      titleClassName={roboto_bold.className}
      bodyClassName={roboto_bold.className}
    >
      <div className={styles.education_list}>
        <div className={styles.job_item}>
          <p>Computer Science, BSc (First-Class Honours)</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>University of Leicester, Sep. 2021—July 2024</p>
        </div>

        <div className={styles.job_item}>
          <p>A-Levels (AAB)</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>History, Psychology, Law, Sep. 2017—July 2020</p>
        </div>

        <div className={styles.job_item}>
          <p>GCSEs (55BBBCC)</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Bruntcliffe Academy, Sep. 2015—July 2017</p>
        </div>
      </div>
    </Card>
  );
}