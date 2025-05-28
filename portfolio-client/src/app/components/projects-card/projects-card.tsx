"use client";
import DefaultCard from "@/app/components/default-card/default-card";
import styles from "./projects-card.module.css";
import { roboto_bold } from "@/app/fonts/fonts";
import Link from "next/link";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useMemo } from "react";

interface Project {
  title: string;
  description: string;
  href: string;
}

const projects: Project[] = [
  { title: "Portfolio", description: "Static website built with Next.js.", href: "https://github.com/masonharniess/Portfolio" },
  { title: "Task Manager", description: "Full-stack web app built with ASP.NET Core, SQLite & Next.js.", href: "https://github.com/masonharniess/Swift-Task-Manager" },
  { title: "CLI Text Adventure", description: "A branching path CLI game written in C++.", href: "https://github.com/masonharniess/Text-Adventure-Game" },
  { title: "General Election Voting System", description: "Full-stack web app built with ASP.NET Core, SQLite & Next.js", href: "https://github.com/masonharniess/General-Election-Voting-System" },
  { title: "Car Inspections Power App", description: "Mobile application developed with the Microsoft Power Apps platform. (In progress.)", href: "https://www.masonharniess.com/home" },
  { title: "IT Inventory System", description: "Deployment and management of open-source IT inventory management solution. (In progress.)", href: "https://www.masonharniess.com/home" },
  { title: "Untitled Project", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", href: "https://www.masonharniess.com/home" },
];

const PAGE_SIZE = 4;

export default function ProjectCard() {
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(projects.length / PAGE_SIZE);

  const pageProjects = useMemo(
      () => projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
      [page]
  );

  /** Animation variants */
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  /** Direction keeps track of slide-in v. slide-out */
  const [direction, setDirection] = useState(0);

  function paginate(newPage: number) {
    setDirection(newPage > page ? 1 : -1);
    setPage(newPage);
  }

  return (
      <DefaultCard
          title="Projects"
          titleClassName={roboto_bold.className}
          subheading={
            <a href="https://github.com/masonharniess?tab=repositories" target="_blank">More projects on GitHub&nbsp;
              <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ height: "13px", paddingBottom: "0.9px" }}
              /></a>
          }
          subheadingClassName={roboto_bold.className}
          bodyClassName={roboto_bold.className}
      >
        <div className={styles.viewport}>
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
                key={page}
                className={styles.page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className={styles.grid}>
                {pageProjects.map((project) => (
                    <div key={project.title} className={styles.project_card}>
                      <h3 className={styles.project_title}>{project.title}</h3>
                      <p className={styles.project_description}>
                        {project.description}
                      </p>
                      <Link
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.project_link}
                          style={{ color: "#7dc2ff" }}
                      >
                        View codebase&nbsp;
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            style={{ height: "13px", paddingBottom: "0.9px" }}
                        />
                      </Link>
                    </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className={styles.pager}>
            <button
                onClick={() => paginate(page - 1)}
                disabled={page === 0}
                className={`${styles.arrow} ${page === 0 ? styles.disabled : ""}`}
                aria-label="Previous projects"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
                onClick={() => paginate(page + 1)}
                disabled={page === pageCount - 1}
                className={`${styles.arrow} ${
                    page === pageCount - 1 ? styles.disabled : ""
                }`}
                aria-label="Next projects"
            >
              {/*<svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 299 511.517"><path d="M12.579 75.262C-24.314 10.56 28.16-20.832 64.505 15.117L273.92 215.793c33.44 33.44 33.44 46.491 0 79.93L64.505 496.4c-36.345 35.949-88.819 4.557-51.926-60.146l97.261-180.496L12.579 75.262z"/></svg>*/}
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

        </div>

        <div className={styles.see_more_parent}>
          {/*<Link*/}
          {/*    href="https://github.com/masonharniess?tab=repositories&q=&type=public&language=&sort="*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*    className={styles.see_more}*/}
          {/*    style={{ color: "#EAEAF1B3" }}*/}
          {/*>*/}
          {/*  More projects on GitHub&nbsp;*/}
          {/*  <FontAwesomeIcon*/}
          {/*      icon={faArrowUpRightFromSquare}*/}
          {/*      style={{ height: "13px", paddingBottom: "0.9px" }}*/}
          {/*  />*/}
          {/*</Link>*/}
        </div>
      </DefaultCard>
  );
}
