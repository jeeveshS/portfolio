import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
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
    <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              {subtitle}
            </p>
          ) : null}
        </div>
        {right ? (
          <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
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
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {kicker}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Dot() {
  return (
    <span className="mt-1.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-50" />
  );
}

function IconSpark() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

export default function Home() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-50`}
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-zinc-200/70 blur-3xl dark:bg-white/10" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[380px] w-[380px] rounded-full bg-zinc-200/70 blur-3xl dark:bg-white/10" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/70 backdrop-blur dark:border-white/10 dark:bg-black/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <span className="text-sm font-bold tracking-tight">JS</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Jeevesh S</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Data Analytics • Power BI • SQL
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="transition hover:text-zinc-950 dark:hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Let’s talk
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 sm:pt-16">
        {/* Hero */}
        <section className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
            <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-black">
                <IconSpark />
              </span>
              <p className="text-sm font-medium">
                Turning raw data into clear decisions.
              </p>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
              Jeevesh S —{" "}
              <span className="text-zinc-600 dark:text-zinc-300">
                Data Analytics & BI
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
              I build interactive dashboards in <b>Power BI</b>, write reliable{" "}
              <b>SQL/MySQL</b> queries, and create KPI-driven reporting that helps
              teams move faster—cleaner models, better refresh performance, and
              insights that are easy to act on.
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
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-black"
              >
                View Projects
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Work Experience
              </a>
            </div>

            <div className="mt-8 grid gap-3 rounded-2xl border border-zinc-200 bg-white/60 p-4 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Location
                </p>
                <p className="mt-1 font-medium">Chennai, India</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Email
                </p>
                <a
                  className="mt-1 inline-block font-medium hover:underline"
                  href="mailto:jeeveshs2003@gmail.com"
                >
                  jeeveshs2003@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Phone
                </p>
                <a
                  className="mt-1 inline-block font-medium hover:underline"
                  href="tel:+917708293397"
                >
                  +91 77082 93397
                </a>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Highlight
              </p>
              <h3 className="mt-2 text-lg font-semibold">Recent impact</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Optimized Power BI data model + DAX to reduce refresh/load time
                    by <b>40%</b>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Built dashboards combining <b>SQL/MySQL</b>, <b>Excel</b>, and{" "}
                    <b>APIs</b> for stakeholder reporting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Implemented refresh monitoring + data quality checks for
                    reliable KPI reporting.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Profiles
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <a
                  className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  href="#contact"
                >
                  <p className="font-semibold">Portfolio</p>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                    Request a PDF resume
                  </p>
                </a>
                <a
                  className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  href="mailto:jeeveshs2003@gmail.com"
                >
                  <p className="font-semibold">Email</p>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                    Let’s connect
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />

        {/* About */}
        <Section id="about" kicker="About" title="A data-first builder">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  I’m an enthusiastic IT professional focused on <b>data analytics</b>{" "}
                  and <b>business intelligence</b>. I enjoy transforming messy data
                  into clear stories and building interactive Power BI dashboards
                  that help teams track KPIs, spot trends, and make faster decisions.
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  I’m comfortable with stakeholder requirements, data cleaning,
                  validation, and designing models that stay reliable over time.
                  I also enjoy mentoring, collaborating, and building practical tools
                  that make work easier.
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
              <Card
                title="Tools I use"
                subtitle="Clean models, fast refresh, trustworthy KPIs"
              >
                <div className="flex flex-wrap gap-2">
                  <Badge>Power BI Service</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Excel</Badge>
                  <Badge>Git/GitHub</Badge>
                  <Badge>VS Code</Badge>
                </div>
              </Card>

              <Card title="Certifications">
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
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

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />

        {/* Skills */}
        <Section id="skills" kicker="Skills" title="What I’m strong at">
          <div className="grid gap-4 md:grid-cols-2">
            <Card
              title="Data Analytics & BI"
              subtitle="Dashboards, storytelling, and actionable insights"
            >
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

            <Card
              title="Database & SQL"
              subtitle="Clean extraction, strong fundamentals"
            >
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

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />

        {/* Experience */}
        <Section id="experience" kicker="Experience" title="Where I’ve worked">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="Cyfotok Infosec — Intern"
              subtitle="Built stakeholder dashboards using SQL/MySQL, Excel, and APIs"
              right="Jun 2025 — Jul 2025"
            >
              <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Built and delivered Power BI dashboards by combining data from
                    SQL/MySQL, Excel, and APIs for stakeholder reporting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Optimized data models + DAX, cutting refresh/load time by{" "}
                    <b>40%</b>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Set up refresh monitoring + data quality checks to ensure accurate,
                    reliable KPI reporting.
                  </span>
                </li>
              </ul>
            </Card>

            <Card
              title="Linumiz — Intern"
              subtitle="Network-integrated data management system"
              right="Jun 2021 — Jul 2021"
            >
              <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Led development of a network-integrated data management system
                    connecting client endpoints to centralized SQL databases for secure
                    data exchange.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Optimized MySQL queries and indexing strategies to improve data
                    retrieval speed and system performance.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Improved network connectivity and data flow efficiency through
                    structured API configuration and optimized request handling.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />

        {/* Projects */}
        <Section id="projects" kicker="Projects" title="Work I’m proud of">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="Medical Analytics Dashboard"
              subtitle="Power BI + Next.js portal with role-based access"
            >
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

              <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Built an interactive medical dashboard to track patient volume,
                    bed occupancy, average wait time, LOS, readmission rate, and
                    department KPIs.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Standardized clinical data using Power Query, designed a star-schema
                    model, and authored DAX measures (MoM trends, rolling averages,
                    target vs actual).
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Created a secure Next.js portal to embed reports with role-based
                    views (Admin/Doctor/Nurse) and department-level filtering.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Request Demo Link
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Ask for Repo
                </a>
              </div>
            </Card>

            <Card
              title="Sales & Performance Analytics Dashboard"
              subtitle="Interactive KPI reporting with drill-through and refresh"
            >
              <div className="flex flex-wrap gap-2">
                <Badge>Power BI</Badge>
                <Badge>DAX</Badge>
                <Badge>Power Query</Badge>
                <Badge>MySQL</Badge>
                <Badge>Excel</Badge>
                <Badge>Power BI Service</Badge>
              </div>

              <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Built a dashboard tracking sales, revenue, profit, and customer KPIs
                    across regions and products.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Cleaned and transformed data in Power Query, then modeled a star
                    schema for accurate slicing and drill-through.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>
                    Authored DAX measures (YoY/MoM growth, rolling averages, targets vs
                    actuals) and published to Power BI Service with scheduled refresh.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Request Screenshots
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Discuss Use Case
                </a>
              </div>
            </Card>
          </div>
        </Section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />

        {/* Education */}
        <Section id="education" kicker="Education" title="Academic background">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="Periyar Maniammai Institute of Science & Technology"
              subtitle="MTech — Wireless Communication"
              right="2024 — Present"
            >
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Currently pursuing postgraduate studies while building real-world BI
                dashboards and data workflows.
              </p>
            </Card>

            <Card
              title="Sri Shakthi Institute of Engineering"
              subtitle="B.E — Electronics & Communication Engineering"
              right="2020 — 2024"
            >
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Strong foundation in engineering, problem-solving, and systems thinking.
              </p>
            </Card>
          </div>
        </Section>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />

        {/* Contact */}
        <Section id="contact" kicker="Contact" title="Let’s build something useful">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  Want a Power BI dashboard that stakeholders actually use? Or need help
                  with data modeling, DAX measures, SQL extraction, or refresh reliability?
                  Send me a message—I’ll reply quickly.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href="mailto:jeeveshs2003@gmail.com"
                    className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-sm font-semibold">Email</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      jeeveshs2003@gmail.com
                    </p>
                  </a>

                  <a
                    href="tel:+917708293397"
                    className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      +91 77082 93397
                    </p>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge>Open to internships</Badge>
                  <Badge>Dashboard development</Badge>
                  <Badge>SQL + Data Modeling</Badge>
                  <Badge>BI Reporting</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card title="Quick note" subtitle="What you can expect">
                <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex gap-3">
                    <Dot />
                    <span>Clean, readable dashboards (not cluttered).</span>
                  </li>
                  <li className="flex gap-3">
                    <Dot />
                    <span>Strong KPI definitions + trustworthy data checks.</span>
                  </li>
                  <li className="flex gap-3">
                    <Dot />
                    <span>Performance focus: fast models and refresh.</span>
                  </li>
                </ul>
              </Card>

              <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Built with
                </p>
                <div className="mt-3 flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-black">
                    <Image
                      src="/next.svg"
                      alt="Next.js"
                      width={22}
                      height={22}
                      className="dark:invert"
                    />
                  </span>
                  <div>
                    <p className="font-semibold">Next.js + Tailwind</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      Modern, responsive, and fast
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <footer className="mt-16 border-t border-zinc-200/70 pt-8 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Jeevesh S. All rights reserved.</p>
            <p className="font-mono text-xs">
              Designed for dark mode • Responsive • KPI-first
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
