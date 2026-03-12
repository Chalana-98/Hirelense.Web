import Link from "next/link";
import { Section } from "@/components/section";

const features = [
  {
    icon: "🎯",
    title: "Semantic CV Matching",
    desc: "Find relevant candidates using meaning, not just keywords.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "⚡",
    title: "Bulk Resume Processing",
    desc: "Upload multiple CVs and automatically extract structured data.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "🚀",
    title: "Instant Candidate Ranking",
    desc: "Prioritize top-fit applicants against every job description.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "💼",
    title: "Recruiter-Friendly Dashboard",
    desc: "Manage jobs, candidates, and scores from a clean interface.",
    color: "from-green-500 to-emerald-500"
  }
];

const stats = [
  { label: "Time Saved", value: "8hrs", suffix: "/role" },
  { label: "Match Accuracy", value: "92", suffix: "%" },
  { label: "Candidates Ranked", value: "10K", suffix: "+" }
];

export default function Page() {
  return (
    <main className="overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 glass backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold shadow-glow">
              H
            </div>
            <span className="text-xl font-bold text-slate-900">HireLens AI</span>
          </div>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#how" className="transition hover:text-slate-900">How it works</a>
            <a href="#pricing" className="transition hover:text-slate-900">Pricing</a>
          </nav>
          <Link
            href="http://localhost:3000/sign-in"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-glow hover:scale-105"
          >
            <span className="relative z-10">Try Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-32">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              AI Recruitment Platform
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
              Hire smarter with
              <span className="mt-2 block text-gradient animate-pulse-slow">
                semantic matching
              </span>
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              HireLens helps teams screen resumes, rank applicants, and fill roles faster using{" "}
              <span className="font-semibold text-slate-900">AI-powered relevance scoring</span>.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="http://localhost:3000/sign-up"
                className="group relative overflow-hidden rounded-2xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <a
                href="#features"
                className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-lg transition-all hover:border-slate-300 hover:shadow-xl"
              >
                Explore Features
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-slate-900">
                    {stat.value}
                    <span className="text-blue-600">{stat.suffix}</span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl" />
            <div className="relative space-y-4 rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-inner-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-600">Job Match Score</p>
                  <div className="mt-1 flex items-baseline gap-1">
                    <p className="text-3xl font-black text-slate-900">92</p>
                    <p className="text-xl font-bold text-blue-600">%</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-5 shadow-inner-glow">
                <p className="text-sm font-semibold text-slate-600">Top Candidate</p>
                <p className="mt-2 text-lg font-bold text-slate-900">Senior Frontend Engineer</p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-lg bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">React</span>
                  <span className="rounded-lg bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">TypeScript</span>
                  <span className="rounded-lg bg-green-100 px-3 py-1 text-xs font-bold text-green-700">5+ yrs</span>
                </div>
              </div>

              <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-5 shadow-inner-glow">
                <p className="text-sm font-semibold text-slate-600">Time Saved / Role</p>
                <p className="mt-2 text-2xl font-black text-slate-900">
                  ~8 <span className="text-lg text-green-600">hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section
        id="features"
        title="Everything you need to shortlist better candidates"
        subtitle="Built for founders, recruiters, and hiring teams that need speed and quality."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, idx) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br ${f.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`} />
              <div className="relative">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-3xl shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">{f.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section
        id="how"
        title="How HireLens works"
        subtitle="From job description to ranked shortlist in minutes."
      >
        <div className="relative">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: 1, title: "Upload job description", icon: "📄", color: "from-blue-500 to-cyan-500" },
              { step: 2, title: "Import resumes in bulk", icon: "📤", color: "from-purple-500 to-pink-500" },
              { step: 3, title: "Review AI-ranked candidates", icon: "✨", color: "from-orange-500 to-red-500" }
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center">
                <div className={`relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br ${item.color} text-4xl shadow-xl`}>
                  {item.icon}
                </div>
                {/* Vertical Line */}
                <div className="h-8 w-0.5 bg-gradient-to-b from-blue-200 to-transparent" />
                <div className="w-full rounded-3xl border border-slate-200/60 bg-white p-6 text-center shadow-lg">
                  <div className="mb-3 inline-flex rounded-full bg-slate-100 px-4 py-1 text-sm font-bold text-slate-700">
                    Step {item.step}
                  </div>
                  <p className="text-lg font-bold text-slate-900">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section
        id="pricing"
        title="Simple pricing for growing teams"
        subtitle="Start free, then scale when your hiring volume grows."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {/* Starter Plan */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
              Starter
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black text-slate-900">$0</span>
              <span className="text-xl font-semibold text-slate-500">/month</span>
            </div>
            <p className="mt-4 text-base text-slate-600">Perfect for early-stage teams testing the platform.</p>
            <ul className="mt-8 space-y-4">
              {["10 candidate profiles", "1 job description", "Basic matching", "Email support"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="http://localhost:3000/sign-up"
              className="mt-8 block rounded-2xl border-2 border-slate-300 bg-white px-6 py-3 text-center font-bold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-blue-500 bg-gradient-to-br from-blue-600 to-purple-600 p-8 shadow-2xl transition-all hover:scale-105 hover:shadow-glow">
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-2xl bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                </span>
                Most Popular
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black text-white">$29</span>
                <span className="text-xl font-semibold text-white/80">/month</span>
              </div>
              <p className="mt-4 text-base text-white/90">For teams hiring every month with advanced needs.</p>
              <ul className="mt-8 space-y-4">
                {["200 candidate profiles", "Unlimited jobs", "Advanced AI matching", "Priority support", "Export reports", "Team collaboration"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="http://localhost:3000/sign-up"
                className="mt-8 block rounded-2xl bg-white px-6 py-3 text-center font-bold text-blue-600 shadow-xl transition-all hover:bg-blue-50"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 blur-3xl" />
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-white shadow-2xl md:px-16">
          <div className="absolute top-0 right-0 h-72 w-72 bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 bg-purple-500/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-4xl font-black md:text-5xl">Ready to hire faster with AI?</h3>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Launch HireLens for your team and reduce manual CV screening time from hours to minutes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="http://localhost:3000/sign-up"
                className="group relative overflow-hidden rounded-2xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-2xl transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <a
                href="#features"
                className="rounded-2xl border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-bold backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold shadow-lg">
                  H
                </div>
                <span className="text-xl font-bold text-slate-900">HireLens AI</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
                The AI-powered recruitment platform that helps teams hire better, faster.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><a href="#features" className="hover:text-slate-900">Features</a></li>
                <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
                <li><a href="#how" className="hover:text-slate-900">How it works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">About</a></li>
                <li><a href="#" className="hover:text-slate-900">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} HireLens AI. All rights reserved. Built for modern AI-assisted hiring.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
