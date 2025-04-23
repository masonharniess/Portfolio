import DefaultCard from "@/app/components/default-card/default-card";
import styles from "./projects-card.module.css"
import {roboto_bold, roboto_light, roboto_standard} from "@/app/fonts/fonts";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard() {
  return (
    <DefaultCard
      title="Projects"
      titleClassName={roboto_bold.className}
      // subheading={
      //   <a href={"https://www.masonharniess.com/projects"} target={"_blank"}>See full project list</a>
      // }
      // subheadingClassName={roboto_bold.className}
      bodyClassName={roboto_bold.className}
    >
      <div className={styles.project_list}>
        <div className={styles.project_item}>
          <div className={styles.project_title_space}>
            <p style={{fontSize: 18}}>
              Portfolio (Static Website)
            </p>
            {/*<div className={styles.divider}></div>*/}
            <p className={`${styles.project_technologies} ${roboto_light.className}`}>
              Dec. 2024–Present
            </p>
          </div>
          <p className={roboto_light.className} style={{color: "#EAEAF1B3", fontSize: 16}}>– Developed a portfolio
            website (this site) as a hobby project.
          </p>
          {/*<p className={roboto_standard.className} style={{color: "#EAEAF1B3", fontSize: 16}}>*/}
          {/*  – Design inspired by&nbsp;*/}
          {/*  <a className={styles.links}*/}
          {/*     href={"https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos"}*/}
          {/*     target={"_blank"}>*/}
          {/*    VisionOS&nbsp;*/}
          {/*    <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{height: "13px", paddingBottom: "0.9px"}}/>*/}
          {/*  </a>*/}
          {/*</p>*/}
          <p className={roboto_light.className} style={{color: "#EAEAF1B3", fontSize: 16}}>– Technologies: Next.js,
            React, TypeScript, HTML, CSS.</p>

        </div>
        <div className={styles.project_item}>
          <div className={styles.project_title_space}>
            <p style={{fontSize: 18}}>
              Swift Task Manager (Web Application)
            </p>
            {/*<div className={styles.divider}></div>*/}
            <p className={`${styles.project_technologies} ${roboto_light.className}`}>
              Jan. 2024–May 2024
            </p>
          </div>
          <p className={roboto_light.className} style={{color: "#EAEAF1B3", fontSize: 16}}>
            – Developed a full-stack web application for users to manage their daily workflow and improve productivity.
          </p>
          <p className={roboto_light.className} style={{color: "#EAEAF1B3", fontSize: 16}}>
            – Final year university project.
          </p>
          <p className={roboto_light.className} style={{color: "#EAEAF1B3", fontSize: 16}}>
            – Technologies: ASP.NET Core, C#, Next.js, React, TypeScript, HTML, CSS
          </p>

        </div>

        <div className={styles.project_item}>
          <div className={styles.project_title_space}>
            <p style={{fontSize: 18}}>
              Text Adventure (Command-Line Game)
            </p>
            {/*<div className={styles.divider}></div>*/}
            <p className={`${styles.project_technologies} ${roboto_light.className}`}>
              Dec. 2023
            </p>
          </div>
          <p className={roboto_light.className} style={{color: "#EAEAF1B3", fontSize: 16}}>
            – Developed a text-based adventure game with command-line user interaction.
          </p>
          <p className={roboto_light.className} style={{color: "#EAEAF1B3", fontSize: 16}}>
            – Technologies: C++
          </p>

        </div>
      </div>

    </DefaultCard>
  )
}