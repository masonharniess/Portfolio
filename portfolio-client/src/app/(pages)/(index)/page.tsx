import styles from "./page.module.css";
import Placeholder from "@/app/components/placeholder/placeholder";
// import LastfmCard from "@/app/components/Lastfm/LastfmCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Placeholder/>
      </main>
    </div>
  );
}

