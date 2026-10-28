import { badgeCategories, type BadgeCategory } from "@/data/badges";

// Mirrors BadgeEmblem + BadgeSymbol from the mobile app (scripts/export-badges.cjs);
// keep both in sync if the artwork changes.
const PRIMARY_DEEP = "#1457c4";

// Paths drawn on a 100 × 100 canvas.
const symbols: Record<string, string> = {
  first_session: "M39 28 Q35 26 35 32 V70 Q35 75 40 72 L73 53 Q77 50 72 47 Z",
  first_recovery_log:
    "M27 27 H67 Q73 27 73 33 V75 H33 Q27 75 27 69 Z M36 27 V75 M45 40 H63 M45 50 H63 M45 60 H57",
  first_active_week:
    "M25 32 H75 V75 H25 Z M25 43 H75 M36 24 V36 M64 24 V36 M37 58 L47 67 L65 50",
  sessions_10: "M28 70 L43 46 L55 57 L73 28 M58 28 H73 V43",
  sessions_25: "M56 20 L29 55 H47 L42 81 L74 43 H55 Z",
  sessions_50:
    "M50 22 L59 40 L80 43 L65 58 L69 79 L50 69 L31 79 L35 58 L20 43 L41 40 Z",
  sessions_100:
    "M33 26 H67 V43 Q67 60 50 62 Q33 60 33 43 Z M33 32 H22 V41 Q22 52 36 53 M67 32 H78 V41 Q78 52 64 53 M50 62 V76 M36 78 H64",
  flame:
    "M52 19 C56 36 76 40 73 58 C70 85 27 84 26 59 C25 47 35 38 39 31 C37 48 49 49 52 19 Z M51 51 C65 67 51 79 43 69 C39 63 46 57 51 51 Z",
  journal_7:
    "M22 29 Q35 24 50 33 Q66 24 78 29 V73 Q64 68 50 77 Q36 68 22 73 Z M50 33 V77 M30 41 L42 44 M30 52 L42 55 M59 48 L64 54 L73 41",
  journal_30:
    "M28 26 H72 V76 H28 Z M36 26 V76 M44 39 H62 M44 49 H62 M43 62 L50 68 L64 55 M62 26 V17 L69 21 L76 17 V36 L69 32 L62 36",
  pain_drop_2:
    "M50 76 L25 52 C7 32 33 15 50 34 C67 15 93 32 75 52 Z M31 50 H42 L48 40 L55 61 L61 50 H70",
  course_completed:
    "M22 27 H78 V72 H22 Z M50 27 V72 M34 41 L42 48 L66 33 M38 58 H62 M34 80 H66",
  comeback:
    "M28 41 A27 27 0 1 1 25 63 M28 24 V41 H45 M41 61 L51 51 L61 61 M51 51 V74",
};

type BadgeEmblemProps = {
  code: string;
  category: BadgeCategory;
  className?: string;
  // Keeps gradient ids unique when the same badge is drawn twice on the page.
  idPrefix?: string;
};

export function BadgeEmblem({
  code,
  category,
  className,
  idPrefix = "badge",
}: BadgeEmblemProps) {
  const color = badgeCategories[category].color;
  const isStreak = code.startsWith("streak_");
  const symbol = symbols[isStreak ? "flame" : code] ?? symbols.sessions_50;
  const tier = /^(sessions|streak|journal)_(\d+)$/.exec(code)?.[2];
  const gradientId = `${idPrefix}-${code}`;

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor={PRIMARY_DEEP} />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx="60" cy="60" r="50" fill={`url(#${gradientId})`} />
      <circle cx="60" cy="60" r="44" fill="none" stroke="white" strokeOpacity="0.18" />
      <g transform="translate(16 13) scale(0.88)">
        <g stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <path d={symbol} fill="white" fillOpacity="0.145" />
          {isStreak && <circle cx="79" cy="25" r="3" fill="white" stroke="none" />}
        </g>
      </g>
      {tier && (
        <>
          <circle cx="91" cy="97" r="17" fill="white" stroke={color} strokeWidth="2" />
          <text
            x="91"
            y="102"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="14"
            fontWeight="800"
            fill={color}
          >
            {tier}
          </text>
        </>
      )}
    </svg>
  );
}
