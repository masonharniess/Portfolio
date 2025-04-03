import styles from "./wallpaper.module.css"

export default function Wallpaper() {
  return (
    <div className={styles.gradient_background}>
      <div className={`${styles.gradient_sphere} ${styles.sphere_1}`}></div>
      <div className={`${styles.gradient_sphere} ${styles.sphere_2}`}></div>
      <div className={`${styles.gradient_sphere} ${styles.sphere_3}`}></div>
      <div className={styles.glow}></div>
      <div className={styles.grid_overlay}></div>
      <div className={styles.noise_overlay}></div>
      <div className={styles.particles_container} id="particles-container"></div>
    </div>
  )
}