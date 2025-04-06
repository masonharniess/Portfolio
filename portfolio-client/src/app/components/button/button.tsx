import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./button.module.css";
import React from "react";

interface IconButtonProps {
  href: string;
  icon: IconProp | React.ReactNode;
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
      {React.isValidElement(icon) ? icon : <FontAwesomeIcon icon={icon as IconProp} />}
    </Link>
  );
}
