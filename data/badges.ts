export type BadgeCategory =
  | "Start"
  | "Volume"
  | "Consistency"
  | "Journal"
  | "Progress"
  | "Course"
  | "Comeback";

type Badge = {
  code: string;
  title: string;
  description: string;
  category: BadgeCategory;
};

// Mirrors features/badges/utils/badge-display.ts in the mobile app.
export const badgeCategories: Record<
  BadgeCategory,
  { label: string; color: string }
> = {
  Start: { label: "Primii pași", color: "#1f6fe5" },
  Volume: { label: "Antrenamente", color: "#1457c4" },
  Consistency: { label: "Consecvență", color: "#ff6a2c" },
  Journal: { label: "Jurnal", color: "#0e9aa0" },
  Progress: { label: "Evoluție", color: "#0d9488" },
  Course: { label: "Cursuri", color: "#5b6ef0" },
  Comeback: { label: "Revenire", color: "#2e7df6" },
};

// The GET /Badge catalog, without the per-user progress fields.
export const badges: readonly Badge[] = [
  {
    code: "first_session",
    title: "Primul pas",
    description: "Finalizează primul antrenament",
    category: "Start",
  },
  {
    code: "first_recovery_log",
    title: "Primul jurnal",
    description: "Completează prima notare în jurnalul de recuperare",
    category: "Start",
  },
  {
    code: "first_active_week",
    title: "Prima săptămână activă",
    description: "Finalizează 3 antrenamente în aceeași săptămână",
    category: "Start",
  },
  {
    code: "sessions_10",
    title: "În ritm",
    description: "Finalizează 10 antrenamente",
    category: "Volume",
  },
  {
    code: "sessions_25",
    title: "Perseverent",
    description: "Finalizează 25 de antrenamente",
    category: "Volume",
  },
  {
    code: "sessions_50",
    title: "Dedicat",
    description: "Finalizează 50 de antrenamente",
    category: "Volume",
  },
  {
    code: "sessions_100",
    title: "Campion al recuperării",
    description: "Finalizează 100 de antrenamente",
    category: "Volume",
  },
  {
    code: "streak_2",
    title: "Două săptămâni la rând",
    description: "Atinge obiectivul săptămânal 2 săptămâni la rând",
    category: "Consistency",
  },
  {
    code: "streak_4",
    title: "O lună constantă",
    description: "Atinge obiectivul săptămânal 4 săptămâni la rând",
    category: "Consistency",
  },
  {
    code: "streak_8",
    title: "Două luni constante",
    description: "Atinge obiectivul săptămânal 8 săptămâni la rând",
    category: "Consistency",
  },
  {
    code: "streak_12",
    title: "Un trimestru",
    description: "Atinge obiectivul săptămânal 12 săptămâni la rând",
    category: "Consistency",
  },
  {
    code: "streak_26",
    title: "Jumătate de an",
    description: "Atinge obiectivul săptămânal 26 de săptămâni la rând",
    category: "Consistency",
  },
  {
    code: "journal_7",
    title: "Atent la corp",
    description: "Completează jurnalul în 7 zile diferite",
    category: "Journal",
  },
  {
    code: "journal_30",
    title: "Jurnal complet",
    description: "Completează jurnalul în 30 de zile diferite",
    category: "Journal",
  },
  {
    code: "pain_drop_2",
    title: "Mai puțină durere",
    description:
      "Durerea medie din ultima săptămână a scăzut cu cel puțin 2 puncte față de prima săptămână",
    category: "Progress",
  },
  {
    code: "course_completed",
    title: "Curs parcurs",
    description: "Finalizează toate videoclipurile unui curs",
    category: "Course",
  },
  {
    code: "comeback",
    title: "Bine ai revenit",
    description: "Finalizează un antrenament după o pauză de cel puțin 14 zile",
    category: "Comeback",
  },
];
