import Image from "next/image";
import programCompleteImage from "@/assets/images/program-complet.png";
import styles from "./phone-application-preview.module.css";

const onboardingBenefits = [
  "Cursuri pentru fiecare articulație",
  "Video, anatomie și exerciții ghidate",
  "Recuperare, prevenție și performanță",
];

function GetPhoneCurrentHourLabel() {
  const now = new Date();
  const currentHourLabel: string = `${now.getHours()}:${now.getMinutes()}`;
  return (
  <span>{currentHourLabel}</span>
  );
 
}

function OnboardingBenefits() {
  return (
    <ul className={styles.benefits}>
      {onboardingBenefits.map((benefit) => (
        <li key={benefit}>
          <span className={styles.checkIcon}>
            <svg viewBox="0 0 24 24">
              <path d="m5 12 5 5L20 6" />
            </svg>
          </span>
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  );
}

function PhoneStatusIcons() {
  return (
    <span className={styles.statusIndicators}>
      <svg width="12" height="11" viewBox="0 0 16 14" fill="currentColor">
        <rect x="0" y="10" width="3" height="4" rx="0.6" />
        <rect x="4" y="7" width="3" height="7" rx="0.6" />
        <rect x="8" y="4" width="3" height="10" rx="0.6" />
        <rect x="12" y="1" width="3" height="13" rx="0.6" />
      </svg>
      <svg width="12" height="11" viewBox="0 0 20 16" fill="none">
        <path d="M1 4a14 14 0 0 1 18 0M4 7.5a9 9 0 0 1 12 0M7 11a4.5 4.5 0 0 1 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="14" r="1.2" fill="currentColor" />
      </svg>
      <span className={styles.batteryIndicator}>
        <span>100%</span>
        <svg width="18" height="10" viewBox="0 0 25 14" fill="none">
          <rect x="1" y="1" width="20" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="3" width="16" height="8" rx="1" fill="currentColor" />
          <path d="M23 5v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    </span>
  );
}

export function PhoneApplicationPreview() {
  return (
    <div
      className="phone"
      role="img"
      aria-label="Previzualizare a ecranului de întâmpinare Biotop Rehab: Program complet, Mișcare fără durere, 9 cursuri specializate pe articulații și opțiunile Începe acum și Am deja cont. Semnal și Wi-Fi complete, baterie 100%."
    >
      <div className="phone-camera" />
      <div className="phone-header" aria-hidden="true">
        <GetPhoneCurrentHourLabel />
        <PhoneStatusIcons />
      </div>
      <div className={styles.screen} aria-hidden="true">
        <Image
          src={programCompleteImage}
          alt=""
          sizes="240px"
          className={styles.programImage}
        />
        <h3 className={styles.title}>Mișcare fără durere.</h3>
        <p className={styles.description}>
          9 cursuri specializate pe articulații, anatomie, exerciții ghidate și
          programe de recuperare, prevenție și performanță.
        </p>
        <OnboardingBenefits />
        <div className={styles.actions}>
          <span className={styles.primaryAction}>Începe acum</span>
          <span className={styles.secondaryAction}>Am deja cont</span>
        </div>
      </div>
    </div>
  );
}
