"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Terminal, MapPin } from "lucide-react";

const CONTACT_EMAIL = "snehauppula23@gmail.com";

/** Gmail web compose — avoids the OS “pick an app for mailto” dialog on Windows */
function buildGmailComposeUrl(form: HTMLFormElement): string {
  const fd = new FormData(form);
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();
  const parts: string[] = [];
  if (name) parts.push(`Name: ${name}`);
  if (email) parts.push(`Contact email: ${email}`);
  if (message) parts.push(`\nMessage:\n${message}`);
  const body =
    parts.length > 0
      ? parts.join("\n")
      : "Hello Sneha,\n\nI'd like to connect about…\n";

  const subjectBase = name ? `Portfolio contact — ${name}` : "Portfolio contact";
  const su =
    subjectBase.length > 200
      ? `${subjectBase.slice(0, 197)}…`
      : subjectBase;

  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
    su,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center overflow-hidden bg-[#020202] px-4 py-10 pb-12 sm:px-6 md:py-14 md:pb-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.07),transparent_55%)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[min(50vh,28rem)] w-[min(100%,56rem)] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Left: headline + story + contact paths */}
          <div className="space-y-5 lg:col-span-5 lg:space-y-6">
            <header className="space-y-3 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-primary/85 lg:justify-start"
              >
                <Terminal className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="text-white/50">&gt;_</span>
                UPLINK_SYSTEM_v4
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-[2.65rem] lg:leading-[0.92] xl:text-7xl"
              >
                Sync with source<span className="text-primary not-italic">.</span>
              </motion.h2>
            </header>

            <p className="mx-auto max-w-md text-center text-base font-light leading-relaxed text-white/55 lg:mx-0 lg:max-w-none lg:text-left md:text-lg">
              Open to AI/ML internships and collaborations. Share a short note—I'll respond as soon as I can.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:items-start lg:justify-start">
              <a
                href="https://maps.google.com/?q=Hyderabad+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-center font-mono text-[11px] font-medium uppercase tracking-wide text-white/80 backdrop-blur-sm transition-colors hover:border-primary/35 hover:bg-primary/[0.07] hover:text-white sm:w-auto sm:justify-start sm:text-left"
              >
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Hyderabad, India · Remote
              </a>
            </div>

            <div className="flex justify-center gap-3 pt-1 sm:gap-4 lg:justify-start">
              {(
                [
                  { Icon: Github, label: "GitHub", href: "https://github.com/snehauppula" },
                  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/snehauppula" },
                  {
                    Icon: Mail,
                    label: "Email",
                    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`,
                  },
                ] as const
              ).map((social, i) => {
                const external = social.href.startsWith("http");
                return (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  href={social.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={external ? `${social.label} (opens in new tab)` : social.label}
                  className="group flex flex-col items-center gap-2 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] text-white/55 shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary md:h-14 md:w-14">
                    <social.Icon className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" aria-hidden />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/35 transition-colors group-hover:text-white/60">
                    {social.label}
                  </span>
                </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-[1.75rem] border border-white/[0.1] bg-[#0a0a0c]/90 p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] ring-1 ring-primary/[0.06] backdrop-blur-xl sm:rounded-[2rem] sm:p-8 md:p-9"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const url = buildGmailComposeUrl(e.currentTarget);
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput name="name" label="Name" placeholder="Your name" type="text" required />
                <FormInput name="email" label="Your email" placeholder="you@example.com" type="email" required />
              </div>
              <div className="space-y-2.5">
                <label
                  htmlFor="message"
                  className="ml-0.5 block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary"
                >
                  Message
                  <span className="ml-0.5 text-primary" aria-hidden>
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="min-h-[140px] w-full resize-y rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm leading-relaxed text-white placeholder:text-white/35 transition-colors focus:border-primary/45 focus:bg-primary/[0.06] focus:outline-none focus:ring-2 focus:ring-primary/25 sm:rounded-3xl sm:px-6 sm:py-5"
                  placeholder="What would you like to collaborate on?"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-lg transition hover:bg-white/95 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c] sm:w-auto sm:justify-start"
              >
                Email Sneha
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.06]">
                  <Send className="h-3.5 w-3.5" aria-hidden />
                </span>
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 sm:text-[11px]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                Bridge ready
              </div>
              <span className="max-w-[14rem] truncate text-right text-white/25 sm:max-w-none">
                To: {CONTACT_EMAIL}
              </span>
            </div>
          </motion.div>
        </div>

        <footer className="mt-8 border-t border-white/[0.06] pt-6 md:mt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-lg font-black uppercase tracking-tight text-white">Sneha Uppula</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/30">
                Portfolio · 2026
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-white/40">
              <FooterLink label="GitHub" href="https://github.com/snehauppula" />
              <FooterLink label="LinkedIn" href="https://linkedin.com/in/snehauppula" />
              <FooterLink
                label="Email"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`}
              />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

function FormInput({
  name,
  label,
  placeholder,
  type,
  required,
}: {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  const isRequired = Boolean(required);
  return (
    <div className="space-y-2.5">
      <label
        htmlFor={id}
        className="ml-0.5 block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary"
      >
        {label}
        {isRequired && (
          <span className="ml-0.5 text-primary" aria-hidden>
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={isRequired}
        autoComplete={type === "email" ? "email" : name === "name" ? "name" : "on"}
        className="h-12 w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-primary/45 focus:bg-primary/[0.06] focus:outline-none focus:ring-2 focus:ring-primary/25 sm:h-[3.25rem] sm:px-6"
        placeholder={placeholder}
      />
    </div>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="rounded underline-offset-4 transition hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
    >
      {label}
    </a>
  );
}
