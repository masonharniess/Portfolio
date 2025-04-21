import { ReactNode } from "react";
import styles from "./default-card.module.css";

interface CardProps {
  title?: string | ReactNode;
  subheading?: string | ReactNode;
  titleClassName?: string;
  subheadingClassName?: string;
  bodyClassName?: string;
  icons?: ReactNode;
  children?: ReactNode;
}

export default function DefaultCard({
                               title,
                               subheading,
                               titleClassName,
                               subheadingClassName,
                               bodyClassName,
                               icons,
                               children,
                             }: CardProps) {
  return (
    <div className={styles.card}>
      {(title || subheading) && (
        <div className={styles.card_header}>
          <div className={styles.header_left}>
            {title && (
              <p className={`${styles.card_title} ${titleClassName || ""}`}>
                {title}
              </p>
            )}
            {subheading && (
              <p className={`${styles.subheading} ${subheadingClassName || ""}`}>
                {subheading}
              </p>
            )}
          </div>
          {icons && <div className={styles.icon_list}>{icons}</div>}
        </div>
      )}
      <div className={`${styles.card_body} ${bodyClassName || ""}`}>
        {children}
      </div>
    </div>
  );
}
