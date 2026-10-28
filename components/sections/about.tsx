import Image from "next/image";

export function About() {
  return (
    <section id="despre" className="section about-section">
      <div className="about-statement">
        <p className="eyebrow">03 — OAMENII DIN SPATELE MIȘCĂRII</p>
        <h2>
          Recuperare ghidată.
          <br />
          Tehnologie cu sens.
          <br />
          <span>Grijă pentru oameni.</span>
        </h2>
        <p>
          Credem că accesul la exerciții explicate clar poate face primul pas
          mai ușor. BioTop Rehab aduce împreună recuperarea medicală și
          tehnologia, într-o aplicație construită în jurul tău.
        </p>
        <div className="mission-note">
          <span>↗</span>
          <p>
            Scopul nostru: să sprijinim oamenii să se miște mai bine și să își
            construiască o rutină de exerciții.
          </p>
        </div>
      </div>
      <div className="team-grid">
        <article className="team-card">
          <Image
            src="/team/oli-3.jpeg"
            alt="Dr. Marian Oliviu"
            width={500}
            height={600}
            sizes="(max-width: 800px) 43vw, 23vw"
            className="team-portrait team-portrait-oliviu"
          />
          <h3>Dr. Marian Oliviu</h3>
          <p>Medic de recuperare medicală</p>
          <span>CONȚINUTUL CURSURILOR</span>
        </article>
        <article className="team-card team-card-offset">
          <Image
            src="/team/sergiu.jpg"
            alt="Maioru Sergiu Ioan"
            width={960}
            height={1120}
            sizes="(max-width: 800px) 43vw, 23vw"
            className="team-portrait team-portrait-sergiu"
          />
          <h3>Maioru Sergiu Ioan</h3>
          <p>Programator</p>
          <span>DEZVOLTAREA APLICAȚIEI</span>
        </article>
      </div>
    </section>
  );
}
