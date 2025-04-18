import Card from "@/app/components/card/card";
import {roboto_bold} from "@/app/fonts/fonts";
import styles from "./education-card.module.css";
import React from "react";

export default function EducationCard() {
  return (
    <Card
      title="Education"
      titleClassName={roboto_bold.className}
      bodyClassName={roboto_bold.className}
      subheading={"Hey!"}
      subheadingClassName={roboto_bold.className}
    >
      <div className={styles.education_list}>
        <div className={styles.job_item}>
          <p>Computer Science, BSc (First-Class Honours)</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>University of Leicester</p>
        </div>

        <div className={styles.job_item}>
          <p>History, Psychology, Law (AAB)</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Notre Dame Catholic Sixth-Form College</p>
        </div>

        <div className={styles.job_item}>
          <p>GCSEs</p>
          <p style={{color: "#EAEAF1B3", fontSize: 16}}>Bruntcliffe Academy</p>
        </div>
      </div>
    </Card>
  );
}