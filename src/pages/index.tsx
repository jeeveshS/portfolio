"use client";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React, { useEffect, useMemo, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// === YOUR INFO / LINKS ===
const NAME = "Jeevesh S";
const TITLE = "Data Analytics • Power BI • SQL";
const LOCATION = "Chennai, India";
const EMAIL = "jeeveshs2003@gmail.com";
const PHONE = "+917708293397";

const GITHUB_PORTFOLIO_URL = "https://github.com/jeeveshS";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/jeevesh-s205?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

const RESUME_PDF_URL = "/resume.pdf";

// ✅ Image section (replaces GIF)
const HERO_PREVIEW_IMAGE_URL =
  "https://cdn.sanity.io/images/v0gkry1w/production/81ed8b41cee7e9fc80616da6fe5b63e94909cdf6-788x443.webp?auto=format&fit=max&q=85&w=2000";

// Opens Gmail compose directly
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}`;

// ===============================
// ✅ DARK BLUE THEME (no black text)
// ===============================
const T = {
  // global / base
  base: "text-slate-200",
  heading: "text-white",
  body: "text-slate-200",
  soft: "text-slate-300",
  muted: "text-slate-400",

  // accents
  link: "text-sky-300",
  linkHover: "hover:text-sky-200",
  chipText: "text-slate-100",

  // surfaces
  card: "bg-white/5 border-white/10",
  cardHover: "hover:bg-white/8",
  navbar: "bg-slate-950/55 border-white/10",
  pill: "bg-white/10 text-slate-100",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-sky-200/20 bg-white/10 px-3 py-1 text-xs font-medium ${T.chipText} shadow-sm backdrop-blur`}
    >
      {children}
    </span>
  );
}

function Card({
  title,
  subtitle,
  right,
  children,
}: {
  title: string;
  subtitle?: string;
  right?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border ${T.card} p-6 shadow-sm backdrop-blur transition ${T.cardHover} hover:shadow-md`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className={`text-base font-semibold ${T.heading}`}>{title}</h3>
          {subtitle ? (
            <p className={`mt-1 text-sm ${T.soft}`}>{subtitle}</p>
          ) : null}
        </div>
        {right ? (
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${T.pill}`}
          >
            {right}
          </span>
        ) : null}
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <p
          className={`text-xs font-semibold uppercase tracking-widest ${T.muted}`}
        >
          {kicker}
        </p>
        <h2
          className={`mt-2 text-2xl font-semibold tracking-tight ${T.heading} sm:text-3xl`}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Dot() {
  return (
    <span className="mt-1.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-sky-300" />
  );
}

function IconSpark() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.2 5.1L18 9l-4.8 1.9L12 16l-1.2-5.1L6 9l4.8-1.9L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M19 13l.8 3.4L23 18l-3.2 1.2L19 22l-.8-2.8L15 18l3.2-1.6L19 13Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        opacity=".7"
      />
      <path
        d="M4.5 13l.7 2.9L8 17l-2.8 1.1L4.5 21l-.7-2.9L1 17l2.8-1.1.7-2.9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        opacity=".7"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close overlay"
      />
      <div className="relative z-[101] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${T.heading}`}>Resume</span>
            <span className={`text-xs ${T.muted}`}>(PDF preview)</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-100 shadow-sm transition hover:bg-white/10"
            >
              Open in new tab
            </a>
            <a
              href={RESUME_PDF_URL}
              download
              className="rounded-full bg-sky-300 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm transition hover:opacity-95"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-slate-100 shadow-sm transition hover:bg-white/10"
              aria-label="Close"
            >
              <IconX />
            </button>
          </div>
        </div>

        <div className="h-[80vh] w-full bg-black">
          <iframe title="Resume PDF" src={RESUME_PDF_URL} className="h-full w-full" />
        </div>

        <div className="border-t border-white/10 px-4 py-3 text-xs text-slate-300">
          Put your resume file at{" "}
          <span className="font-mono">public/resume.pdf</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen ${T.base} antialiased`}
      style={{
        background:
          "radial-gradient(1100px 650px at 20% 10%, rgba(56,189,248,0.14), transparent 60%), radial-gradient(900px 600px at 85% 85%, rgba(99,102,241,0.12), transparent 55%), linear-gradient(135deg, #020617 0%, #061734 45%, #020617 100%)",
      }}
    >
      {/* Soft glows */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Top bar */}
      <header className={`sticky top-0 z-50 border-b ${T.navbar} backdrop-blur`}>
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-sm">
              <span className="text-sm font-bold tracking-tight text-white">
                JS
              </span>
            </div>
            <div className="leading-tight">
              <p className={`text-sm font-semibold ${T.heading}`}>{NAME}</p>
              <p className={`text-xs ${T.soft}`}>{TITLE}</p>
            </div>
          </div>

          <nav className={`hidden items-center gap-6 text-sm ${T.soft} md:flex`}>
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="transition hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:opacity-95"
            >
              Let’s talk
            </a>
          </div>
        </div>
      </header>

      {/* FULL-WIDTH IMAGE SECTION */}
      <section className="relative w-full pt-4">
        <div className="w-full border-y border-white/10 bg-white/5 backdrop-blur">
          <img
            src={HERO_PREVIEW_IMAGE_URL}
            alt="Technology preview"
            className="block w-full max-h-[520px] object-cover opacity-90"
            loading="lazy"
          />
        </div>
      </section>

      {/* MAIN */}
      <main className="relative w-full px-6 pb-24 pt-10 sm:pt-14">
        {/* Hero */}
        <section className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div
            className={`rounded-3xl border ${T.card} bg-white/5 p-8 shadow-sm backdrop-blur sm:p-10`}
          >
            <div className={`flex items-center gap-3 ${T.soft}`}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-300 text-slate-950">
                <IconSpark />
              </span>
              <p className="text-sm font-medium">
                Turning raw data into clear decisions.
              </p>
            </div>

            <h1
              className={`mt-6 text-3xl font-semibold tracking-tight ${T.heading} sm:text-5xl`}
            >
              {NAME} —{" "}
              <span className="text-sky-200/90">Data Analytics & BI</span>
            </h1>

            <p className={`mt-5 max-w-3xl text-base leading-7 ${T.body}`}>
              I build interactive dashboards in{" "}
              <b className="text-white">Power BI</b>, write reliable{" "}
              <b className="text-white">SQL/MySQL</b> queries, and create KPI-driven
              reporting that helps teams move faster—cleaner models, better refresh
              performance, and insights that are easy to act on.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Power BI • DAX • Power Query</Badge>
              <Badge>MySQL • Joins • Aggregations</Badge>
              <Badge>Excel • Pivot Tables • Lookups</Badge>
              <Badge>Python • Pandas • Automation</Badge>
              <Badge>ETL Basics • Data Quality</Badge>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:opacity-95"
              >
                View Projects
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 shadow-sm transition hover:bg-white/10"
              >
                Work Experience
              </a>
            </div>

            <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm sm:grid-cols-3">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${T.muted}`}
                >
                  Location
                </p>
                <p className={`mt-1 font-medium ${T.heading}`}>{LOCATION}</p>
              </div>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${T.muted}`}
                >
                  Email
                </p>
                <a
                  className={`mt-1 inline-block font-medium ${T.link} ${T.linkHover} hover:underline`}
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${T.muted}`}
                >
                  Phone
                </p>
                <a
                  className={`mt-1 inline-block font-medium ${T.link} ${T.linkHover} hover:underline`}
                  href={`tel:${PHONE}`}
                >
                  +91 77082 93397
                </a>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            <div
              className={`rounded-3xl border ${T.card} bg-white/5 p-6 shadow-sm backdrop-blur`}
            >
              <p className={`text-xs font-semibold uppercase tracking-widest ${T.muted}`}>
                Highlight
              </p>
              <h3 className={`mt-2 text-lg font-semibold ${T.heading}`}>
                Recent impact
              </h3>
              <ul className={`mt-4 space-y-3 text-sm ${T.body}`}>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Optimized Power BI data model + DAX to reduce refresh/load time by{" "}
                    <b className="text-white">40%</b>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Built dashboards combining{" "}
                    <b className="text-white">SQL/MySQL</b>,{" "}
                    <b className="text-white">Excel</b>, and{" "}
                    <b className="text-white">APIs</b> for stakeholder reporting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Implemented refresh monitoring + data quality checks for reliable KPI reporting.
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={`rounded-3xl border ${T.card} bg-white/5 p-6 shadow-sm backdrop-blur`}
            >
              <p className={`text-xs font-semibold uppercase tracking-widest ${T.muted}`}>
                Profiles
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <a
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-sm transition hover:bg-white/10 hover:shadow-md"
                  href={GITHUB_PORTFOLIO_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className={`font-semibold ${T.heading}`}>GitHub</p>
                  <p className={`mt-1 ${T.muted} break-all`}>{GITHUB_PORTFOLIO_URL}</p>
                </a>

                <a
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-sm transition hover:bg-white/10 hover:shadow-md"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className={`font-semibold ${T.heading}`}>LinkedIn</p>
                  <p className={`mt-1 ${T.muted} break-all`}>{LINKEDIN_URL}</p>
                </a>

                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm shadow-sm transition hover:bg-white/10 hover:shadow-md sm:col-span-2"
                >
                  <p className={`font-semibold ${T.heading}`}>Resume</p>
                  <p className={`mt-1 ${T.muted}`}>View / Download PDF</p>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* divider */}
        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* About */}
        <Section id="about" kicker="About" title="A data-first builder">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className={`rounded-3xl border ${T.card} bg-white/5 p-8 shadow-sm backdrop-blur`}>
                <p className={`text-base leading-7 ${T.body}`}>
                  I’m an enthusiastic IT professional focused on{" "}
                  <b className="text-white">data analytics</b> and{" "}
                  <b className="text-white">business intelligence</b>. I enjoy transforming messy data into clear stories
                  and building interactive Power BI dashboards that help teams track KPIs, spot trends, and make faster decisions.
                </p>
                <p className={`mt-4 text-base leading-7 ${T.body}`}>
                  I’m comfortable with stakeholder requirements, data cleaning, validation, and designing models that stay reliable over time.
                  I also enjoy mentoring, collaborating, and building practical tools that make work easier.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge>English</Badge>
                  <Badge>Tamil</Badge>
                  <Badge>Mentoring</Badge>
                  <Badge>Rotaract • Volunteering</Badge>
                  <Badge>Teamwork</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card title="Tools I use" subtitle="Clean models, fast refresh, trustworthy KPIs">
                <div className="flex flex-wrap gap-2">
                  <Badge>Power BI Service</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Excel</Badge>
                  <Badge>Git/GitHub</Badge>
                  <Badge>VS Code</Badge>
                </div>
              </Card>

              <Card title="Certifications">
                <ul className={`space-y-2 text-sm ${T.body}`}>
                  <li className="flex items-start gap-3">
                    <Dot />
                    <span>Power BI Certification — Udemy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Dot />
                    <span>Python Certification — HackerRank</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Dot />
                    <span>MySQL Certification — HackerRank</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Dot />
                    <span>Networking — Udemy</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Skills */}
        <Section id="skills" kicker="Skills" title="What I’m strong at">
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Data Analytics & BI" subtitle="Dashboards, storytelling, and actionable insights">
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>Power BI Dashboards</Badge>
                <Badge>Data Modeling</Badge>
                <Badge>DAX</Badge>
                <Badge>Power Query</Badge>
                <Badge>KPI Tracking</Badge>
                <Badge>Interactive Reporting</Badge>
                <Badge>Data Storytelling</Badge>
              </div>
            </Card>

            <Card title="Database & SQL" subtitle="Clean extraction, strong fundamentals">
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>MySQL</Badge>
                <Badge>Joins</Badge>
                <Badge>Aggregations</Badge>
                <Badge>Views</Badge>
                <Badge>Normalization</Badge>
                <Badge>Data Validation</Badge>
                <Badge>Backup & Recovery</Badge>
              </div>
            </Card>

            <Card title="Excel" subtitle="Analysis that business teams love">
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>Pivot Tables</Badge>
                <Badge>Lookups</Badge>
                <Badge>Charts</Badge>
                <Badge>Data Cleaning</Badge>
              </div>
            </Card>

            <Card title="Automation & Data Prep" subtitle="Speed + reliability">
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>Pandas</Badge>
                <Badge>ETL Basics</Badge>
                <Badge>Data Quality Checks</Badge>
                <Badge>Refresh Monitoring</Badge>
              </div>
            </Card>
          </div>
        </Section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Experience */}
        <Section id="experience" kicker="Experience" title="Where I’ve worked">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="Cyfotok Infosec — Intern"
              subtitle="Built stakeholder dashboards using SQL/MySQL, Excel, and APIs"
              right="Jun 2025 — Jul 2025"
            >
              <ul className={`space-y-3 text-sm ${T.body}`}>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Built and delivered Power BI dashboards by combining data from SQL/MySQL, Excel, and APIs for stakeholder reporting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Optimized data models + DAX, cutting refresh/load time by{" "}
                    <b className="text-white">40%</b>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Set up refresh monitoring + data quality checks to ensure accurate, reliable KPI reporting.
                  </span>
                </li>
              </ul>
            </Card>

            <Card
              title="Linumiz — Intern"
              subtitle="Network-integrated data management system"
              right="Jun 2021 — Jul 2021"
            >
              <ul className={`space-y-3 text-sm ${T.body}`}>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Led development of a network-integrated data management system connecting client endpoints to centralized SQL databases for secure data exchange.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Optimized MySQL queries and indexing strategies to improve data retrieval speed and system performance.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Improved network connectivity and data flow efficiency through structured API configuration and optimized request handling.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Projects */}
        <Section id="projects" kicker="Projects" title="Work I’m proud of">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card title="Medical Analytics Dashboard" subtitle="Power BI + Next.js portal with role-based access">
              <div className="flex flex-wrap gap-2">
                <Badge>Power BI</Badge>
                <Badge>DAX</Badge>
                <Badge>Power Query</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind</Badge>
                <Badge>SQL</Badge>
                <Badge>Power BI Service</Badge>
              </div>

              <ul className={`mt-4 space-y-3 text-sm ${T.body}`}>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Built an interactive medical dashboard to track patient volume, bed occupancy, average wait time, LOS, readmission rate, and department KPIs.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Standardized clinical data using Power Query, designed a star-schema model, and authored DAX measures (MoM trends, rolling averages, target vs actual).
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Created a secure Next.js portal to embed reports with role-based views (Admin/Doctor/Nurse) and department-level filtering.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-95"
                >
                  Request Demo Link
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Ask for Repo
                </a>
              </div>
            </Card>

            <Card title="Sales & Performance Analytics Dashboard" subtitle="Interactive KPI reporting with drill-through and refresh">
              <div className="flex flex-wrap gap-2">
                <Badge>Power BI</Badge>
                <Badge>DAX</Badge>
                <Badge>Power Query</Badge>
                <Badge>MySQL</Badge>
                <Badge>Excel</Badge>
                <Badge>Power BI Service</Badge>
              </div>

              <ul className={`mt-4 space-y-3 text-sm ${T.body}`}>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Built a dashboard tracking sales, revenue, profit, and customer KPIs across regions and products.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Cleaned and transformed data in Power Query, then modeled a star schema for accurate slicing and drill-through.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Authored DAX measures (YoY/MoM growth, rolling averages, targets vs actuals) and published to Power BI Service with scheduled refresh.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-95"
                >
                  Request Screenshots
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Discuss Use Case
                </a>
              </div>
            </Card>
          </div>
        </Section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Education */}
        <Section id="education" kicker="Education" title="Academic background">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="Periyar Maniammai Institute of Science & Technology"
              subtitle="MTech — Wireless Communication"
              right="2024 — Present"
            >
              <p className={`text-sm ${T.body}`}>
                Currently pursuing postgraduate studies while building real-world BI dashboards and data workflows.
              </p>
            </Card>

            <Card
              title="Sri Shakthi Institute of Engineering"
              subtitle="B.E — Electronics & Communication Engineering"
              right="2020 — 2024"
            >
              <p className={`text-sm ${T.body}`}>
                Strong foundation in engineering, problem-solving, and systems thinking.
              </p>
            </Card>
          </div>
        </Section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Contact */}
        <Section id="contact" kicker="Contact" title="Let’s build something useful">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div
                className={`rounded-3xl border ${T.card} bg-white/5 p-8 shadow-sm backdrop-blur`}
              >
                <p className={`text-base leading-7 ${T.body}`}>
                  Want a Power BI dashboard that stakeholders actually use? Or need help
                  with data modeling, DAX measures, SQL extraction, or refresh reliability?
                  Send me a message—I’ll reply quickly.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={GMAIL_COMPOSE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition hover:bg-white/10 hover:shadow-md"
                  >
                    <p className={`text-sm font-semibold ${T.heading}`}>Email (Gmail)</p>
                    <p className={`mt-1 text-sm ${T.soft}`}>{EMAIL}</p>
                  </a>

                  <a
                    href={`tel:${PHONE}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition hover:bg-white/10 hover:shadow-md"
                  >
                    <p className={`text-sm font-semibold ${T.heading}`}>Phone</p>
                    <p className={`mt-1 text-sm ${T.soft}`}>+91 77082 93397</p>
                  </a>

                  <a
                    href={GITHUB_PORTFOLIO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition hover:bg-white/10 hover:shadow-md sm:col-span-2"
                  >
                    <p className={`text-sm font-semibold ${T.heading}`}>GitHub</p>
                    <p className={`mt-1 text-sm ${T.muted} break-all`}>{GITHUB_PORTFOLIO_URL}</p>
                  </a>

                  <button
                    type="button"
                    onClick={() => setResumeOpen(true)}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-sm transition hover:bg-white/10 hover:shadow-md sm:col-span-2"
                  >
                    <p className={`text-sm font-semibold ${T.heading}`}>Resume</p>
                    <p className={`mt-1 text-sm ${T.muted}`}>View / Download PDF</p>
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge>Open to internships</Badge>
                  <Badge>Dashboard development</Badge>
                  <Badge>SQL + Data Modeling</Badge>
                  <Badge>BI Reporting</Badge>
                </div>
              </div>
            </div>

            {/* ✅ Right column removed: Quick note + Built with */}
            <div className="hidden lg:block" />
          </div>
        </Section>

        <footer className="mt-16 border-t border-white/10 pt-8 text-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className={T.soft}>
              © {new Date().getFullYear()}{" "}
              <span className={T.heading}>{NAME}</span>. All rights reserved.
            </p>
            <p className={`font-mono text-xs ${T.muted}`}>
              jee and co
            </p>
          </div>
        </footer>
      </main>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
