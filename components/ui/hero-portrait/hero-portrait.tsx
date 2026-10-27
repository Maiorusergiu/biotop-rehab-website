import Image from "next/image";
import styles from "./hero-portrait.module.css";

export function HeroPortrait() {
  return (
    <div className={styles.portrait}>
      <Image
        src="/team/background-image.png"
        alt="Dr. Marian Oliviu în sala de antrenament"
        fill
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.shading} aria-hidden="true" />
    </div>
  );
}
