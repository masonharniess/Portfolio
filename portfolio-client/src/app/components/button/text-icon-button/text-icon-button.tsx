import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./text-icon-button.module.css";
import React from "react";
import {roboto_standard} from "@/app/fonts/fonts";

interface IconButtonProps {
  href: string;
  icon: IconProp | React.ReactNode;
  alt?: string;
  target?: string;
}

export default function TextIconButton({ href, icon, alt, target }: IconButtonProps) {
  return (
    <div className={`${styles.text_icon_button} ${roboto_standard.className}`}>
      <Link
        href={href}
        target={target}
        className={styles.iconButton}
        aria-label={alt}
      >
        {React.isValidElement(icon) ? icon : <FontAwesomeIcon icon={icon as IconProp}/>}
      </Link>
      <p className={`${styles.footer} ${roboto_standard.className}`}>Lastfm API</p>
    </div>

  );
}
