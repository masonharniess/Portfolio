import { ReactNode } from "react";
import styles from "./card.module.css";

interface CardProps {
  title?: string | ReactNode;
  titleClassName?: string;
  bodyClassName?: string;
  icons?: ReactNode;
  children?: ReactNode;
}

export default function Card({
                               title,
                               titleClassName,
                               bodyClassName,
                               icons,
                               children,
                             }: CardProps) {
  return (
    <div className={styles.card}>
      {title && (
        <div className={styles.card_header}>
          <p className={`${styles.card_title} ${titleClassName || ""}`}>
            {title}
          </p>
          {icons && <div className={styles.icon_list}>{icons}</div>}

        </div>
      )}
      <div className={`${styles.card_body} ${bodyClassName || ""}`}>
        {children}
      </div>
    </div>
  );
}
