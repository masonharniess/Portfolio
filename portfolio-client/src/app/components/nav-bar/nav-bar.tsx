"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCode, faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./nav-bar.module.css";
import {roboto_standard} from "@/app/fonts/fonts";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavLink {
  href: string;
  icon: IconDefinition;
  label: string;
}
const links: NavLink[] = [
  { href: "/home", icon: faHouse, label: "Home" },
  { href: "https://github.com/masonharniess?tab=repositories", icon: faCode, label: "Projects" },
  { href: "/music", icon: faMusic, label: "Music" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${styles.link} ${pathname.startsWith(link.href) ? styles.active : ""}`}
        >
          <FontAwesomeIcon icon={link.icon} height={22} />
          <span className={`${styles.label} ${roboto_standard.className}`}>{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}