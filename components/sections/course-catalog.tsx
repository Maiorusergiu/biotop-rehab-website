import Image from "next/image";
import type { CSSProperties } from "react";
import { courses } from "@/data/courses";
import { ArrowSVG } from "@/components/ui/arrow-svg";
import { CoursePrice } from "@/components/ui/course-price/course-price";

export function CourseCatalog() {
  return (
    <section id="cursuri" className="section courses-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 — CURSURILE NOASTRE</p>
          <h2>
            Fiecare mișcare contează.
            <br />
            <span>Începe de unde ai nevoie.</span>
          </h2>
        </div>
        <p>
          Cursuri video dedicate fiecărei zone.
          <br />
          Alegi cursul, activezi abonamentul în aplicație
          <br />
          și începi în ritmul tău.
        </p>
      </div>
      <div className="course-grid">
        {courses.map((course) => (
          <article
            className="course-card"
            key={course.id}
            style={{ "--category-color": course.color } as CSSProperties}
          >
            <div className="course-image-wrap">
              <Image
                src={course.image}
                alt={`Prezentarea cursului ${course.title} — Biotop Rehab`}
                sizes="(max-width: 540px) 90vw, (max-width: 800px) 44vw, 23vw"
              />
            </div>
            <div className="course-content">
              <span className="category-label">
                <span />
                {course.category}
              </span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <CoursePrice price={course.price} />
              <details>
                <summary>
                  Descoperă cursul <ArrowSVG diagonal />
                </summary>
                <div className="course-detail">
                  <p>{course.detail}</p>
                  <a href="#aplicatie">Despre accesul în aplicație →</a>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
      <div className="course-footnote">
        <span>
          <span className="status-dot" /> Biblioteca de exerciții este în
          continuă dezvoltare.
        </span>
        <span>Un abonament separat pentru fiecare curs.</span>
      </div>
    </section>
  );
}
