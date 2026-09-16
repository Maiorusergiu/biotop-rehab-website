import Image from "next/image";
import oliviuPortrait from "@/assets/images/team/background-image.png";
import styles from "./hero-portrait.module.css";

export function HeroPortrait() {
  return (
    <div className={styles.portrait}>
      <Image
        src={oliviuPortrait}
        alt="Dr. Marian Oliviu în sala de antrenament"
        fill
        preload
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.shading} aria-hidden="true" />
    </div>
  );
}
