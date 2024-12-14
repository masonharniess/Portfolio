import styles from "./page.module.css";
import {inknut_antiqua_light, inknut_antiqua_bold} from "@/app/fonts/fonts";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={inknut_antiqua_bold.className}>Website by Mason Harniess.</p>
        <p className={inknut_antiqua_light.className}>Work in progress.</p>
      </main>
    </div>
  );
}

