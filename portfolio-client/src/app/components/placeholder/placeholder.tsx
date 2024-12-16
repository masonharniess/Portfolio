import styles from "./placeholder.module.css"
import { inknut_antiqua_light, inknut_antiqua_bold} from "@/app/fonts/fonts";

export default function Placeholder() {
  return (
    <div className={styles.placeholder}>
      <p className={inknut_antiqua_bold.className}>Website by Mason Harniess</p>
      <p className={inknut_antiqua_light.className}>Come back soon.</p>
    </div>
  )
}