import { PhoneApplicationPreview } from "@/components/ui/phone-application-preview/phone-application-preview";
import { ArrowSVG } from "@/components/ui/arrow-svg";
import { BadgeShowcase } from "@/components/ui/badge-showcase";
import { badgeCategories, badges } from "@/data/badges";

const steps = [
  {
    title: "Îți creezi contul",
    text: "Te înregistrezi și te conectezi în aplicația mobilă.",
  },
  {
    title: "Alegi cursul tău",
    text: "Descoperi cursurile și activezi un abonament pentru cel ales.",
  },
  {
    title: "Te miști în ritmul tău",
    text: "Urmărești exercițiile, notezi cum te simți și îți vezi progresul.",
  },
];
const features = [
  {
    title: "Programe de recuperare video",
    text: "Cursuri de kinetoterapie create de un medic de recuperare, cu videoclipuri de prezentare gratuite. Abonament lunar per curs, la care renunți oricând.",
  },
  {
    title: "Antrenamente urmărite automat",
    text: "Fiecare exercițiu vizionat e înregistrat ca antrenament. Reiei unul întrerupt în următoarele 24 de ore și te întorci rapid la exercițiile recente.",
  },
  {
    title: "Programul tău de exerciții",
    text: "Îți alegi zilele și ora, pornind de la recomandarea medicului: 3 antrenamente pe săptămână. Primești remindere pe telefon și vezi cum stai săptămâna asta.",
  },
  {
    title: "Jurnal de durere și mobilitate",
    text: "Notezi durerea și mobilitatea de la 0 la 10 și urmărești evoluția într-un grafic pe zile, săptămâni sau luni.",
  },
  {
    title: "Raport PDF cu progresul",
    text: "Generezi un raport pentru orice perioadă, cu evoluția, aderența la program și toate notările.",
  },
  {
    title: "Insigne și serii",
    text: "17 insigne în 7 categorii și o serie săptămânală care crește cu fiecare săptămână cu cel puțin 3 antrenamente.",
  },
  {
    title: "Mesaje directe cu medicul",
    text: "O conversație privată cu medicul de recuperare, în care poți atașa o poză sau exercițiul despre care ai o întrebare.",
  },
  {
    title: "Pentru clinici partenere",
    text: "Pacienții clinicilor partenere primesc un cod de reducere, aplicat automat la toate cursurile și afișat separat pe factură.",
  },
];
const trustTags = [
  "Plăți securizate prin Stripe",
  "Facturi PDF în aplicație",
  "Autentificare cu email sau Google",
  "Suport și raportări în aplicație",
  "Ștergerea contului la cerere",
];

export function AppPresentation() {
  return (
    <section id="aplicatie" className="app-section">
      <div className="app-main">
        <div className="app-copy">
          <p className="eyebrow">
            02 — APLICAȚIA BIOTOP REHAB <span className="beta-badge">BETA</span>
          </p>
          <h2>
            Mai aproape de tine.
            <br />
            <span>La o atingere distanță.</span>
          </h2>
          <p>
            Un spațiu pentru mișcare, chiar în buzunarul tău: exerciții video
            create de un medic de recuperare, un program pe care ți-l alegi tu
            și un jurnal care îți arată cum progresezi.
          </p>
          <ol className="app-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className="button" href="#contact">
            Întreabă-ne despre acces <ArrowSVG diagonal />
          </a>
          <p className="app-availability">
            Linkurile de descărcare vor fi publicate aici.
          </p>
        </div>
        <div className="phone-stage">
          <div className="phone-ambient-light" aria-hidden="true" />
            <PhoneApplicationPreview />
          <div className="phone-caption">
            <span>▷</span>
            <div>
              Exerciții explicate.
              <br />
              <strong>Pas cu pas.</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="app-features">
        <div className="app-features-heading">
          <span className="app-features-marker">CE GĂSEȘTI ÎN APLICAȚIE</span>
          <h3>Tot ce ai nevoie pentru recuperare, într-un singur loc.</h3>
        </div>
        <ul className="app-feature-grid">
          {features.map((feature, index) => (
            <li key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </li>
          ))}
        </ul>
        <div className="feature-tags">
          {trustTags.map((tag) => (
            <span key={tag}>✓ &nbsp;{tag}</span>
          ))}
        </div>
      </div>
      <div className="app-badges">
        <div className="app-badges-heading">
          <span className="app-features-marker">INSIGNE</span>
          <h3>Fiecare pas contează. Și se vede.</h3>
          <p>
            {badges.length} insigne în {Object.keys(badgeCategories).length}{" "}
            categorii te răsplătesc pentru consecvență, pentru jurnal și pentru
            progresul tău.
          </p>
        </div>
        <BadgeShowcase />
      </div>
    </section>
  );
}
