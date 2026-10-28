"use client";

import { useState } from "react";
import { BadgeEmblem } from "@/components/ui/badge-emblem";
import { badgeCategories, badges } from "@/data/badges";

export function BadgeShowcase() {
  const [selectedCode, setSelectedCode] = useState(badges[0].code);
  const selectedBadge =
    badges.find((badge) => badge.code === selectedCode) ?? badges[0];
  const selectedCategory = badgeCategories[selectedBadge.category];

  return (
    <>
      <ul className="app-badge-grid">
        {badges.map((badge) => (
          <li key={badge.code}>
            <button
              type="button"
              className="app-badge-button"
              aria-pressed={badge.code === selectedCode}
              aria-label={badge.title}
              onClick={() => setSelectedCode(badge.code)}
            >
              <BadgeEmblem
                code={badge.code}
                category={badge.category}
                className="app-badge-emblem"
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="app-badge-detail" aria-live="polite">
        <div key={selectedBadge.code} className="app-badge-detail-content">
          <BadgeEmblem
            code={selectedBadge.code}
            category={selectedBadge.category}
            className="app-badge-detail-emblem"
            idPrefix="badge-detail"
          />
          <div>
            <span
              className="app-badge-category"
              style={{ color: selectedCategory.color }}
            >
              {selectedCategory.label}
            </span>
            <h4>{selectedBadge.title}</h4>
            <p>{selectedBadge.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
