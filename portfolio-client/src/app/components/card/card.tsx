import { ReactNode } from "react";
import styles from "./card.module.css";

// Optional props styling to override the default if needed
interface CardProps {
  title?: string;
  titleClassName?: string;
  bodyClassName?: string;
  children?: ReactNode;
}

export default function Card({title, titleClassName, bodyClassName, children}: CardProps) {
  return (
    <div className={styles.card}>
      {/* Render the title only if provided */}
      {title && (
        <p className={`${styles.card_title} ${titleClassName || ""}`}>
          {title}
        </p>
      )}
      {/* The rest of the content goes here */}
      <div className={`${styles.card_body} ${bodyClassName || ""}`}>
        {children}
      </div>
    </div>
  );
}
