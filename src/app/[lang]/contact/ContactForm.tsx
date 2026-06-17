"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { icons } from "@/components/icons";

type ContactDict = {
  success: string;
  labels: { name: string; email: string; phone: string; message: string };
  ph: { name: string; email: string; phone: string; message: string };
  submit: string;
  reset: string;
};

export default function ContactForm({ lang, c }: { lang: Lang; c: ContactDict }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} style={sent ? { opacity: 0.5, pointerEvents: "none" } : undefined}>
      <div className={`success-msg${sent ? " show" : ""}`}>
        {icons.success()}
        <span>{c.success}</span>
      </div>

      <div className="form-group">
        <label htmlFor="name">{c.labels.name}</label>
        <input id="name" name="name" type="text" placeholder={c.ph.name} required disabled={sent} />
      </div>
      <div className="form-group">
        <label htmlFor="email">{c.labels.email}</label>
        <input id="email" name="email" type="email" placeholder={c.ph.email} required disabled={sent} dir="ltr" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">{c.labels.phone}</label>
        <input id="phone" name="phone" type="tel" placeholder={c.ph.phone} disabled={sent} dir="ltr" />
      </div>
      <div className="form-group">
        <label htmlFor="message">{c.labels.message}</label>
        <textarea id="message" name="message" rows={5} placeholder={c.ph.message} required disabled={sent} />
      </div>

      <div className="form-submit">
        <button type="submit" className="btn btn-primary" disabled={sent}>
          {c.submit}
        </button>
        <button type="reset" className="btn btn-ghost" disabled={sent}>
          {c.reset}
        </button>
      </div>
    </form>
  );
}
