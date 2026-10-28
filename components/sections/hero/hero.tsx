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
          <span className="note-symbol" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.8l2.2 1.6 2.7-.1.8 2.6 2.2 1.6-.9 2.5.9 2.5-2.2 1.6-.8 2.6-2.7-.1L12 21.2l-2.2-1.6-2.7.1-.8-2.6-2.2-1.6.9-2.5-.9-2.5 2.2-1.6.8-2.6 2.7.1z" />
              <path d="m8.8 12.2 2.2 2.2 4.3-4.6" />
            </svg>
          </span>
          <div>
            Programe create de <strong>Dr. Marian Oliviu</strong>
            <span>Medic de recuperare medicală</span>
          </div>
        </div>
      </div>
      <div className={`hero-bottom ${styles.bottom}`}>
        <span>RECUPERARE GHIDATĂ. LA ÎNDEMÂNA TA.</span>
        <a href="#cursuri">
          Descoperă mai mult <span>↓</span>
        </a>
      </div>
    </section>
  );
}
