import styles from "../../page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Website by Mason Harniess.</p>
        <Image src="/taariq.jpeg" width="300" height="300" alt=""/>
        <MyButton/>
        <Profile/>
      </main>
    </div>
  );
}

function MyButton() {
  return (
    <button className="avatar">Im a button</button>
  )
}

const user = {
  name: "Mason Harniess"
}

function Profile() {
  return (
    <>
      <h1>
        {user.name}
      </h1>
    </>
  )
}
