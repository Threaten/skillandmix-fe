"use client";

import { useState, useRef } from "react";

type FieldState = {
  value: string;
  error: string;
  touched: boolean;
};

const initialField: FieldState = { value: "", error: "", touched: false };

function validate(name: string, value: string): string {
  if (!value.trim()) {
    const labels: Record<string, string> = {
      name: "Name",
      email: "Email address",
      subject: "Subject",
      message: "Message",
    };
    return `${labels[name] ?? "This field"} is required.`;
  }
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Please enter a valid email address.";
  }
  if (name === "message" && value.trim().length < 20) {
    return "Please write at least 20 characters.";
  }
  return "";
}

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: { ...initialField },
    email: { ...initialField },
    subject: { ...initialField },
    message: { ...initialField },
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof typeof prev],
        touched: true,
        error: validate(name, value),
      },
    }));
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof typeof prev],
        value,
        error: prev[name as keyof typeof prev].touched
          ? validate(name, value)
          : "",
      },
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate all fields
    const next = { ...fields };
    let hasError = false;
    (Object.keys(next) as (keyof typeof next)[]).forEach((key) => {
      const err = validate(key, next[key].value);
      next[key] = { ...next[key], touched: true, error: err };
      if (err) hasError = true;
    });
    setFields(next);
    if (hasError) return;

    setStatus("loading");
    // Simulate async submission
    setTimeout(() => setStatus("success"), 1200);
  }

  if (status === "success") {
    return (
      <div
        className="py-16 px-8 bg-surface-raised border border-surface-border text-center"
        style={{ borderRadius: "3px" }}
      >
        <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-acid-green mb-4">
          Message received
        </p>
        <p
          className="font-display font-black text-warm-white mb-4"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            letterSpacing: "-0.015em",
            lineHeight: 1,
          }}
        >
          We&rsquo;ll be in touch.
        </p>
        <p className="text-sm text-ash">
          Expect a reply within 1&ndash;2 business days.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full bg-transparent text-warm-white border-0 border-b px-0 py-3.5 text-sm font-sans placeholder:text-ash/50 transition-colors duration-200 focus:outline-none focus:border-acid-green";
  const inputNormal = "border-warm-white/25";
  const inputError = "border-ember-red";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-8"
    >
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Nguyen"
          value={fields.name.value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} ${fields.name.error ? inputError : inputNormal}`}
          aria-describedby={fields.name.error ? "name-error" : undefined}
          aria-invalid={!!fields.name.error}
          style={{ borderRadius: 0 }}
        />
        {fields.name.error && (
          <p
            id="name-error"
            className="font-mono text-[0.65rem] tracking-[0.08em] text-ember-text"
          >
            {fields.name.error}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          value={fields.email.value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} ${fields.email.error ? inputError : inputNormal}`}
          aria-describedby={fields.email.error ? "email-error" : undefined}
          aria-invalid={!!fields.email.error}
          style={{ borderRadius: 0 }}
        />
        {fields.email.error && (
          <p
            id="email-error"
            className="font-mono text-[0.65rem] tracking-[0.08em] text-ember-text"
          >
            {fields.email.error}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="subject"
          className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Course inquiry, enrollment, general question…"
          value={fields.subject.value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} ${fields.subject.error ? inputError : inputNormal}`}
          aria-describedby={fields.subject.error ? "subject-error" : undefined}
          aria-invalid={!!fields.subject.error}
          style={{ borderRadius: 0 }}
        />
        {fields.subject.error && (
          <p
            id="subject-error"
            className="font-mono text-[0.65rem] tracking-[0.08em] text-ember-text"
          >
            {fields.subject.error}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ash"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what you're looking for — which course you're interested in, your experience level, any questions you have."
          value={fields.message.value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} resize-none ${fields.message.error ? inputError : inputNormal}`}
          aria-describedby={fields.message.error ? "message-error" : undefined}
          aria-invalid={!!fields.message.error}
          style={{ borderRadius: 0 }}
        />
        {fields.message.error && (
          <p
            id="message-error"
            className="font-mono text-[0.65rem] tracking-[0.08em] text-ember-text"
          >
            {fields.message.error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-2 self-start"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
