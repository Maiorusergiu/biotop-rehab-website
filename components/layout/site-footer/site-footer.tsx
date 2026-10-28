import { BrandLogo } from "@/components/ui/brand-logo";
import { ArrowSVG } from "@/components/ui/arrow-svg";
import styles from "./site-footer.module.css";

const footerLinks = [
  { href: "#acasa", label: "Acasă" },
  { href: "#cursuri", label: "Cursurile noastre" },
  { href: "#aplicatie", label: "Aplicația mobilă" },
  { href: "#despre", label: "Despre noi" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.identity}>
          <a
            className={styles.brand}
            href="#acasa"
            aria-label="BioTop Rehab — Acasă"
          >
            <BrandLogo />
            <span>
              BioTop <span className={styles.brandSecondary}>Rehab</span>
            </span>
          </a>
          <p className={styles.tagline}>
            Mai multă mișcare.
            <br />
            <span>Mai multă viață.</span>
          </p>
          <p className={styles.description}>
            Exerciții ghidate, create de un medic de recuperare, și un nou
            început. În ritmul tău.
          </p>
        </div>
        <nav className={styles.navigation} aria-label="Navigare în subsol">
          <h2>Descoperă BioTop</h2>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  {link.label}
                  <ArrowSVG diagonal />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.contact}>
          <h2>Rămânem aproape</h2>
          <p>
            O întrebare, o idee sau un simplu salut?
            <br />
            Ne bucurăm să te auzim.
          </p>
          <a className={styles.email} href="mailto:contact@biotopacademy.ro">
            contact@biotopacademy.ro <ArrowSVG diagonal />
          </a>
          <a className={styles.contactLink} href="#contact">
            Scrie-ne un mesaj <ArrowSVG />
          </a>
          <span className={styles.beta}>
            <span /> Aplicație în versiune Beta
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} BioTop Rehab. Toate drepturile rezervate.
        </p>
        <a href="#acasa">
          Înapoi sus <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
