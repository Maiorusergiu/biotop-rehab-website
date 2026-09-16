import type { CoursePrice as CoursePriceDetails } from "@/data/courses";
import styles from "./course-price.module.css";

const priceFormatter = new Intl.NumberFormat("ro-RO", {
  style: "currency",
  currency: "RON",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function CoursePrice({ price }: { price: CoursePriceDetails | null }) {
  return (
    <div className={styles.price}>
      <span className={styles.label}>ABONAMENT CURS</span>
      {price ? (
        <p>
          <strong>{priceFormatter.format(price.amount)}</strong>
          <span> / {price.periodLabel}</span>
        </p>
      ) : (
        <p className={styles.pending}>Preț în curs de confirmare</p>
      )}
    </div>
  );
}
