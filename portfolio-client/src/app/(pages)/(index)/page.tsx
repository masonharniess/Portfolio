import styles from "./page.module.css";
import {inknut_antiqua_bold} from "@/app/fonts/fonts";
// import LastfmCard from "@/app/components/Lastfm/LastfmCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro_card}>
          <p className={inknut_antiqua_bold.className}>Website by Mason Harniess.</p>
          <p>Work in progress. Come back soon.</p>
        </div>
      </main>
    </div>
  );
}

