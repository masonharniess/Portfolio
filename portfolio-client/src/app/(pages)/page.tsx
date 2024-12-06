import styles from "../page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <p>Website by Mason Harniess.</p>
        <Image src="/taariq.jpeg" width="300" height="300" alt=""/>


      </main>
    </div>
  );
}
