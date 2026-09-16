import { ArrowSVG } from "@/components/ui/arrow-svg";
import { HeroPortrait } from "@/components/ui/hero-portrait/hero-portrait";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="acasa" className={`hero ${styles.hero}`}>
      <HeroPortrait />
      <div className={`hero-copy ${styles.copy}`}>
        <div className="eyebrow">
          <span className="status-dot" /> MIȘCAREA ÎNCEPE CU TINE
        </div>
        <h1>
          Înapoi la mișcare.
          <br />
          Înapoi la <span>tine.</span>
        </h1>
        <p className="hero-description">
          Umărul, spatele sau genunchii îți schimbă planurile?
          <br className="desktop-break" /> Fă primul pas către o mișcare mai
          ușoară, cu exerciții ghidate, direct de pe telefonul tău.
        </p>
        <div className="hero-actions">
          <a className="button" href="#cursuri">
            Găsește cursul potrivit <ArrowSVG diagonal />
          </a>
          <a className="text-link" href="#aplicatie">
            <span className="play-icon">▷</span> Cum funcționează
          </a>
        </div>
        <div className="doctor-note">
          <div>
            Cu expertiza <strong>Dr. Marian Oliviu</strong>
            <span>Medic de recuperare medicală</span>
          </div>
          <span className="note-symbol" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>
      <div className={`hero-bottom ${styles.bottom}`}>
        <span>EXPERTIZĂ MEDICALĂ. LA ÎNDEMÂNA TA.</span>
        <a href="#cursuri">
          Descoperă mai mult <span>↓</span>
        </a>
      </div>
    </section>
  );
}
