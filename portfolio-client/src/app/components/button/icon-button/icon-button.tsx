import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./icon-button.module.css";
import React from "react";

interface IconButtonProps {
  /** E-either give href **or** onClick; not both */
  href?: string;
  onClick?: () => void;
  /** icon can be a ready-made element or a fa icon */
  icon: IconProp | React.ReactNode;
  alt?: string;
  target?: string;
  disabled?: boolean;
  className?: string;
}

export default function IconButton({
                                     href,
                                     onClick,
                                     icon,
                                     alt,
                                     target,
                                     disabled = false,
                                     className = "",
                                   }: IconButtonProps) {
  const content = React.isValidElement(icon)
      ? icon
      : <FontAwesomeIcon icon={icon as IconProp} />;

  /* — Link version — */
  if (href && !onClick) {
    return (
        <Link
            href={href}
            target={target}
            aria-label={alt}
            className={`${styles.iconButton} ${className}`}
        >
          {content}
        </Link>
    );
  }

  /* — Button version (for paginate etc.) — */
  return (
      <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          aria-label={alt}
          className={`${styles.iconButton} ${disabled ? styles.disabled : ""} ${className}`}
      >
        {content}
      </button>
  );
}