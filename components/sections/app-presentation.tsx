import { PhoneApplicationPreview } from "@/components/ui/phone-application-preview/phone-application-preview";
import { ArrowSVG } from "@/components/ui/arrow-svg";

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
    text: "Urmărești videoclipurile și explicațiile exercițiilor.",
  },
];
const upcomingFeatures = [
  "Tracking al progresului",
  "Planuri de nutriție",
  "Notarea exercițiilor",
  "Streaks zilnice",
  "Calendar de activitate",
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
            Un spațiu pentru mișcare, chiar în buzunarul tău. În versiunea Beta,
            ne concentrăm pe ce contează la început: exerciții video și
            explicații clare.
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
      <div className="roadmap">
        <div>
          <span className="roadmap-marker">ÎN PREGĂTIRE</span>
          <h3>Acesta este doar începutul.</h3>
          <p>Idei pentru următoarele etape ale aplicației.</p>
        </div>
        <div className="feature-tags">
          {upcomingFeatures.map((feature) => (
            <span key={feature}>+ &nbsp;{feature}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
