import { ContactForm } from "@/components/forms/contact-form";
import { ArrowSVG } from "@/components/ui/arrow-svg";

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="eyebrow">04 — HAI SĂ VORBIM</p>
        <h2>
          Primul pas poate fi
          <br />
          <span>o conversație.</span>
        </h2>
        <p>
          Ai o întrebare despre cursuri, aplicație sau proiect?
          <br />
          Scrie-ne. Suntem aici să te ascultăm.
        </p>
        <a className="contact-email" href="mailto:contact@biotopacademy.ro">
          contact@biotopacademy.ro <ArrowSVG diagonal />
        </a>
        <div className="contact-decoration" aria-hidden="true">
          ↗
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
