import Image from "next/image";
import styles from "./phone-application-preview.module.css";

type DayStatus = "done" | "planned" | "today" | "rest";

const weekDays: { label: string; date: number; status: DayStatus }[] = [
  { label: "Lu", date: 26, status: "done" },
  { label: "Ma", date: 27, status: "rest" },
  { label: "Mi", date: 28, status: "today" },
  { label: "Jo", date: 29, status: "rest" },
  { label: "Vi", date: 30, status: "planned" },
  { label: "Sâ", date: 31, status: "rest" },
  { label: "Du", date: 1, status: "rest" },
];

const tabs = ["Exerciții", "Progres", "Reușite"];

function GetPhoneCurrentHourLabel() {
  const now = new Date();
  const currentHourLabel: string = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
  return (
  <span>{currentHourLabel}</span>
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

function WeekCard() {
  return (
    <div className={styles.weekCard}>
      <div className={styles.weekHeader}>
        <div>
          <span className={styles.weekEyebrow}>SĂPTĂMÂNA TA</span>
          <strong className={styles.weekTitle}>
            Azi ai programat exerciții · reminder 08:45
          </strong>
        </div>
        <span className={styles.weekRing}>
          <span>
            <strong>1</strong>/3
          </span>
        </span>
      </div>
      <ol className={styles.weekDays}>
        {weekDays.map((day) => (
          <li key={day.label} data-status={day.status}>
            <span className={styles.dayLabel}>{day.label}</span>
            <span className={styles.dayDate}>{day.date}</span>
          </li>
        ))}
      </ol>
      <div className={styles.weekLegend}>
        <span>
          <i className={styles.legendDone} /> făcută
        </span>
        <span>
          <i className={styles.legendPlanned} /> planificată
        </span>
      </div>
      <span className={styles.editSchedule}>Editează programul ›</span>
    </div>
  );
}

const recentExercises = [
  {
    title: "Exerciții pentru spate",
    details: "Intermediar · 08:24",
    sessions: "3 antrenamente finalizate",
    lastSession: "Ieri",
    thumbnail: "/images/exercise-thumbnail-back.jpg",
  },
  {
    title: "Mobilitate umăr",
    details: "Începător · 06:10",
    sessions: "1 antrenament finalizat",
    lastSession: "Acum 3 zile",
    thumbnail: "/images/exercise-thumbnail-shoulder.jpg",
  },
];

function RecentExercises() {
  return (
    <div className={styles.exerciseList}>
      {recentExercises.map((exercise) => (
        <div key={exercise.title} className={styles.exerciseCard}>
          <Image
            src={exercise.thumbnail}
            alt=""
            width={144}
            height={180}
            sizes="40px"
            className={styles.exerciseThumbnail}
          />
          <div className={styles.exerciseInfo}>
            <strong>{exercise.title}</strong>
            <span>{exercise.details}</span>
            <span className={styles.exerciseSessions}>{exercise.sessions}</span>
            <span>{exercise.lastSession}</span>
          </div>
          <span className={styles.exerciseChevron}>›</span>
        </div>
      ))}
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className={styles.bottomNavigation}>
      <span className={styles.navActive}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 10.5 12 4l8 6.5V20h-5.5v-5h-5v5H4z" />
        </svg>
        Acasă
      </span>
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M3 6.5c3-1.2 6-1.2 9 0v13c-3-1.2-6-1.2-9 0zM12 6.5c3-1.2 6-1.2 9 0v13c-3-1.2-6-1.2-9 0z" />
        </svg>
        Cursuri
      </span>
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
        </svg>
        Profil
      </span>
    </div>
  );
}

export function PhoneApplicationPreview() {
  return (
    <div
      className="phone"
      role="img"
      aria-label="Previzualizare a ecranului Acasă din aplicația BioTop Rehab: programul săptămânii cu 1 din 3 antrenamente făcute, reminder la 08:45 și ultimul exercițiu vizionat, Exerciții pentru spate."
    >
      <div className="phone-camera" />
      <div className="phone-header" aria-hidden="true">
        <GetPhoneCurrentHourLabel />
        <PhoneStatusIcons />
      </div>
      <div className={styles.screen} aria-hidden="true">
        <div className={styles.greetingRow}>
          <div>
            <span className={styles.greeting}>Salut!</span>
            <h3 className={styles.title}>Continuă-ți recuperarea</h3>
          </div>
          <span className={styles.messageButton}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="4" y="5" width="16" height="13" rx="2.5" />
              <path d="M8 9.5h8M8 13h5" />
            </svg>
          </span>
          <span className={styles.avatar}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="9.5" r="4.5" />
              <path d="M3 24c0-5 4-8.5 9-8.5s9 3.5 9 8.5z" />
            </svg>
          </span>
        </div>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <span key={tab} className={index === 0 ? styles.tabActive : undefined}>
              {tab}
            </span>
          ))}
        </div>
        <WeekCard />
        <h4 className={styles.sectionTitle}>Ultimele exerciții</h4>
        <RecentExercises />
        <BottomNavigation />
      </div>
    </div>
  );
}
