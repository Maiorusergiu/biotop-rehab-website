"use client";
import { useState } from "react";
import { ArrowSVG } from "@/components/ui/arrow-svg";

export function ContactForm() {
  const [isEmailPrepared, setIsEmailPrepared] = useState(false);

  function prepareContactEmail(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "").trim();
    const body = `Nume: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:contact@biotopacademy.ro?subject=${encodeURIComponent(`Biotop Rehab — ${subject}`)}&body=${encodeURIComponent(body)}`;
    setIsEmailPrepared(true);
  }

  return (
    <form className="contact-form" onSubmit={prepareContactEmail}>
      <div className="form-row">
        <label>
          Numele tău
          <input
            name="name"
            autoComplete="name"
            placeholder="Nume și prenume"
            required
            maxLength={120}
          />
        </label>
        <label>
          Adresa de email
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nume@exemplu.ro"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        Cu ce te putem ajuta?
        <select name="subject" defaultValue="" required>
          <option value="" disabled>
            Alege un subiect
          </option>
          <option>Acces la aplicație</option>
          <option>Informații despre cursuri</option>
          <option>Feedback și sugestii</option>
          <option>Altă întrebare</option>
        </select>
      </label>
      <label>
        Mesajul tău
        <textarea
          name="message"
          rows={4}
          placeholder="Spune-ne cum te putem ajuta…"
          required
          minLength={10}
          maxLength={3000}
        />
      </label>
      <p className="form-note">
        Formularul pregătește mesajul în aplicația ta de email. Tu alegi când îl
        trimiți. Evită să incluzi informații medicale sensibile.
      </p>
      <button className="button" type="submit">
        Pregătește emailul <ArrowSVG diagonal />
      </button>
      <p className="form-status" role="status">
        {isEmailPrepared
          ? "Mesajul a fost pregătit. Finalizează trimiterea în aplicația de email. Dacă nu se deschide, scrie direct la contact@biotopacademy.ro."
          : ""}
      </p>
    </form>
  );
}
