import Link from "next/link";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import styles from "./button.module.css";

interface IconButtonProps {
  href: string;
  icon: FontAwesomeIconProps["icon"];
  alt?: string;
  target?: string;
}

export default function IconButton({ href, icon, alt, target }: IconButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={styles.iconButton}
      aria-label={alt}
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
