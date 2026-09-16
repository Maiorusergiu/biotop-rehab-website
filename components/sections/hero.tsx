import { ArrowSVG } from "@/components/ui/arrow-svg";

export function Hero() {
  return (
    <section id="acasa" className="hero">
      <div className="hero-copy">
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
      <div className="hero-visual">
        <div className="visual-topline">
          <span>UN NOU ÎNCEPUT, ÎN RITMUL TĂU</span>
          <span>BIOTOP / BETA</span>
        </div>
        <div className="hero-visual-message">
          <span>Mișcare.</span>
          <span>Echilibru.</span>
          <span>Recuperare.</span>
        </div>
        <div className="visual-orbit" aria-hidden="true" />
        <span className="visual-plus" aria-hidden="true">
          +
        </span>
        <div className="visual-caption">
          <span className="caption-icon">↗</span>
          <div>
            Pași mici.
            <br />
            <strong>Mai multă libertate.</strong>
          </div>
          <span className="image-label">BIOTOP REHAB</span>
        </div>
        <div className="floating-label">
          <span className="status-dot" /> Recuperare, oriunde ești.
        </div>
      </div>
      <div className="hero-bottom">
        <span>EXPERTIZĂ MEDICALĂ. LA ÎNDEMÂNA TA.</span>
        <a href="#cursuri">
          Descoperă mai mult <span>↓</span>
        </a>
      </div>
    </section>
  );
}
