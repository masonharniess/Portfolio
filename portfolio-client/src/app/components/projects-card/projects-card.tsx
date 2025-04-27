import DefaultCard from "@/app/components/default-card/default-card";
import styles from "./projects-card.module.css";
import { roboto_bold} from "@/app/fonts/fonts";
import Link from "next/link";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Project {
  title: string;
  description: string;
  href: string;
}

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "Static website built with Next.js.",
    href: "https://github.com/masonharniess/Portfolio",
  },
  {
    title: "Task Manager",
    description: "Full‑stack to-do list web app built with Next.js & ASP.NET Core.",
    href: "https://github.com/masonharniess/Swift-Task-Manager",
  },
  {
    title: "CLI Text Adventure",
    description: "A branching path CLI game written in C++.",
    href: "https://github.com/masonharniess/Text-Adventure-Game",
  },
  // {
  //   title: "Fourth Project",
  //   description: "Short description.",
  //   href: "",
  // },
];

export default function ProjectCard() {
  return (
    <DefaultCard
      title="Recent Projects"
      titleClassName={roboto_bold.className}
      // subheading={
      //   <a
      //     href="https://www.masonharniess.com/projects"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Projects Page&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{height: "13px", paddingBottom: "0.9px"}}/>
      //   </a>
      // }
      subheadingClassName={roboto_bold.className}
      bodyClassName={roboto_bold.className}
    >
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.project_card}>
            <h3 className={styles.project_title}>{project.title}</h3>
            <p className={styles.project_description}>{project.description}</p>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.project_link}
              style={{color: "#7dc2ff"}}
            >
              View codebase&nbsp;
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{height: "13px", paddingBottom: "0.9px"}}/>
            </Link>
          </div>
        ))}
      </div>
    </DefaultCard>
  );
}