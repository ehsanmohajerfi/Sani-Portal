import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import ScrollToTopButton from "@/components/layout/scroll-to-top-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import CheckoutButton from "@/components/public/checkout-button";
import {
  Code2,
  Brain,
  Settings2,
  ArrowDown,
  MapPin,
  GraduationCap,
  Building2,
  Cpu,
  Sparkles,
  CheckCircle2,
  Star,
  UserCircle2,
} from "lucide-react";

/* ── DATA ───────────────────────────────────────────── */

const services = [
  {
    icon: Code2,
    title: "Web design",
    id: "services",
    color: "bg-[var(--purple-50)] text-[var(--purple-600)]",
    desc: "Custom websites built with Next.js, Tailwind, and Sanity CMS. Fast, responsive, and easy for you to manage.",
  },
  {
    icon: Brain,
    title: "AI services",
    id: "ai",
    color: "bg-[var(--teal-50)] text-[var(--teal-600)]",
    desc: "Professional AI image and video production, plus hands-on AI training for your team.",
  },
  {
    icon: Settings2,
    title: "Automation",
    id: "automation",
    color: "bg-[var(--coral-50)] text-[var(--coral-600)]",
    desc: "Custom workflows, agents, and integrations that eliminate repetitive tasks for good.",
  },
];

const tools = [
  "Next.js", "Supabase", "Stripe", "Sanity CMS",
  "Vercel", "OpenAI", "n8n", "Figma",
];

const stats = [
  { value: "14", label: "Projects delivered" },
  { value: "100%", label: "On-time delivery" },
  { value: "3", label: "AI tools shipped" },
  { value: "5★", label: "Client rating" },
];

const credentials = [
  {
    icon: MapPin,
    color: "bg-[var(--purple-50)] text-[var(--purple-600)]",
    title: "Virtuaali-Viitasaari",
    desc: "Interactive city map for the City of Viitasaari, launched at VisitViitasaari.com.",
    tags: ["Witas Oy", "City of Viitasaari"],
    tagColor: "bg-[var(--purple-50)] text-[var(--purple-800)]",
  },
  {
    icon: Cpu,
    color: "bg-[var(--teal-50)] text-[var(--teal-600)]",
    title: "Central Finland AI Hackathon",
    desc: "Organised the first AI hackathon in Central Finland. 40+ participants, 8 teams.",
    tags: ["Digikeskus · 2024"],
    tagColor: "bg-[var(--teal-50)] text-[var(--teal-800)]",
  },
  {
    icon: GraduationCap,
    color: "bg-[var(--coral-50)] text-[var(--coral-600)]",
    title: "JAMK University of Applied Sciences",
    desc: "Master's in Fullstack Software Development. Thesis: TrioTalk language exchange app.",
    tags: ["Jyväskylä · 2026"],
    tagColor: "bg-[var(--coral-50)] text-[var(--coral-800)]",
  },
  {
    icon: Building2,
    color: "bg-blue-50 text-blue-600",
    title: "Project Specialist — Witas Oy",
    desc: "Delivered AI solutions to regional businesses. Built student pipeline via JAMK Startup Factory.",
    tags: ["Viitasaari · 2025"],
    tagColor: "bg-blue-50 text-blue-800",
  },
];

const values = [
  {
    icon: CheckCircle2,
    title: "You own everything",
    desc: "Code, domain, content — all yours. No lock-in, no forced retainer.",
  },
  {
    icon: Sparkles,
    title: "Full transparency",
    desc: "Live project dashboard so you always know what's done and what's next.",
  },
  {
    icon: Settings2,
    title: "Low maintenance",
    desc: "Built to run quietly. Fast, reliable sites you can update yourself.",
  },
];

const testimonials = [
  {
    quote: "Sani Dev delivered a website that completely changed how people find us online. The AI features were things we didn't know we needed.",
    name: "Juha Jääskelä",
    role: "CEO, Witas Oy",
    initials: "JJ",
    tag: "Web design",
    tagColor: "bg-[var(--purple-50)] text-[var(--purple-800)]",
  },
  {
    quote: "The project dashboard saved us hours of back-and-forth. I always knew exactly where things stood without chasing anyone.",
    name: "Jana K.",
    role: "Jewellery designer",
    initials: "JK",
    tag: "Web design",
    tagColor: "bg-[var(--purple-50)] text-[var(--purple-800)]",
  },
  {
    quote: "He built an automation that handles our entire client onboarding. What took two hours of manual work now runs on its own.",
    name: "Mikael T.",
    role: "Restaurant owner",
    initials: "MT",
    tag: "Automation",
    tagColor: "bg-[var(--coral-50)] text-[var(--coral-800)]",
  },
];

const plans = [
  {
    name: "Starter",
    pkg: "starter" as const,
    price: "€799",
    period: "one-time + VAT",
    desc: "Perfect for entrepreneurs and small businesses launching their first professional online presence.",
    features: [
      "5-page no-code website (Webflow/Framer)",
      "Mobile-responsive design",
      "Basic SEO setup",
      "CMS so you update content yourself",
      "2 revision rounds",
      "Client dashboard access",
    ],
    cta: "Choose Starter",
    featured: false,
    badge: null,
  },
  {
    name: "Pro",
    pkg: "pro" as const,
    price: "€2,400",
    period: "one-time + VAT",
    desc: "Full custom code-based product — AI-accelerated development with auth, payments, and a dashboard built in.",
    features: [
      "Unlimited pages, fully custom Next.js",
      "AI-accelerated development (vibe coding)",
      "Auth, payments (Stripe), client portal",
      "Advanced SEO + performance optimisation",
      "1 automation workflow",
      "4 revision rounds + priority support",
    ],
    cta: "Choose Pro",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Custom",
    pkg: "custom" as const,
    price: "Custom",
    period: "quote",
    desc: "Complex AI agents, multi-phase builds, rebranding + SEO + social media strategy combined.",
    features: [
      "Everything in Pro",
      "Dedicated AI agent or tool",
      "Full automation suite",
      "Professional photography",
      "Social media marketing setup",
      "Direct Slack/WhatsApp line",
    ],
    cta: "Get a quote",
    featured: false,
    badge: null,
  },
];

/* ── COMPONENT ──────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="border-b border-border/60 px-6 pt-32 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            Finland-based · Web design · AI · Automation
          </div>
          <h1 className="mb-4 text-4xl font-medium leading-tight tracking-tight">
            Build your digital presence with purpose
          </h1>
          <p className="mb-8 text-base text-muted-foreground leading-relaxed">
            A Finnish digital studio building fast, beautiful websites and
            AI-powered tools that save you time. Based in Jyväskylä.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/#pricing">
                See packages <ArrowDown className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="/tarina/" target="_blank" rel="noopener noreferrer">
                My Story
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* TOOLS BAR */}
      <section className="border-b border-border/60 px-6 py-6">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Built with tools I use every day
        </p>
        <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 px-4 py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card via-card/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-card via-card/90 to-transparent" />
          <div className="tools-marquee flex w-max items-center">
            {[0, 1, 2, 3].map((groupIndex) => (
              <div key={groupIndex} className="flex flex-none items-center gap-2.5" aria-hidden={groupIndex > 0}>
                {tools.map((tool) => (
                  <span
                    key={`${groupIndex}-${tool}`}
                    className="flex-none whitespace-nowrap rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs text-muted-foreground shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/60">
          {stats.map((s) => (
            <div key={s.label} className="py-8 text-center">
              <div className="text-2xl font-medium">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-border/60 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            What we do
          </p>
          <h2 className="mb-10 text-2xl font-medium">Three core services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                id={s.id}
                className="rounded-xl border border-border/60 bg-card p-5"
              >
                <div className={`mb-4 inline-flex rounded-lg p-2 ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-sm font-medium">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* TESTIMONIALS */}
      <section className="border-b border-border/60 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mb-10 text-2xl font-medium">What clients say</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col gap-4 rounded-xl border border-border/60 bg-card p-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--purple-50)] text-[10px] font-medium text-[var(--purple-600)]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-medium">{t.name}</p>
                    <p className="text-[11px] text-muted-foreground">{t.role}</p>
                    <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${t.tagColor}`}>
                      {t.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b border-border/60 bg-secondary/40 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Pricing
          </p>
          <h2 className="mb-3 text-2xl font-medium">Simple, transparent packages</h2>
          <p className="mb-10 text-sm text-muted-foreground">
            All packages include your private project dashboard with real-time progress tracking.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-xl border bg-card p-5 ${
                  p.featured ? "border-2 border-primary" : "border-border/60"
                }`}
              >
                {p.featured && (
                  <span className="mb-3 inline-block w-fit rounded-md bg-primary px-2.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                    Most popular
                  </span>
                )}
                <p className="text-sm font-medium">{p.name}</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-medium">{p.price}</span>
                  <span className="text-xs text-muted-foreground">{p.period}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="my-5 flex flex-col gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CheckoutButton
                  package={p.pkg}
                  label={p.cta}
                  variant={p.featured ? "default" : "outline"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-border/60 bg-secondary/40 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            About the studio
          </p>
          <h2 className="mb-3 text-2xl font-medium">A Finnish digital studio</h2>
          <p className="mb-10 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Sani Dev is a one-person studio based in{" "}
            <span className="font-medium text-foreground">Jyväskylä, Central Finland</span>.
            We build fast, low-maintenance digital solutions for businesses and
            organisations across Finland.
          </p>

          {/* Credentials */}
          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="flex gap-3 rounded-xl border border-border/60 bg-card p-4"
              >
                <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${c.color}`}>
                  <c.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">{c.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <span key={tag} className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${c.tagColor}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid gap-3 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border/60 bg-card p-4">
                <v.icon className="mb-3 h-5 w-5 text-muted-foreground" />
                <p className="text-sm font-medium">{v.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-3 text-2xl font-medium">Ready to start a project in Finland?</h2>
          <p className="mb-8 text-sm text-muted-foreground">
            Free 30-minute consultation. No commitment, no hard sell.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3WU8Km4zrJwiTia90UjMW3C7FjQtTgmNNLLe2xt9vSQeD_Z6C2uP--Kf-TRjlalMV0EMsmPcKs"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-full bg-gray-800 px-2 py-2 text-white shadow-lg shadow-black/15 transition-all duration-300 hover:bg-neutral-900 hover:px-3"
            >
              <span className="flex items-center">
                <Avatar className="size-8 border border-white/10">
                  <AvatarFallback className="bg-white/10 text-white">
                    <Code2 className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="ml-2 text-sm font-semibold tracking-tight whitespace-nowrap">
                  Book a free call
                </span>
              </span>

              <span className="ml-0 flex items-center gap-1 overflow-hidden whitespace-nowrap max-w-0 opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-40 group-hover:opacity-100">
                <span className="text-sm text-white/70">+</span>
                <Avatar className="size-7 border border-white/10">
                  <AvatarFallback className="bg-white/10 text-white">
                    <UserCircle2 className="h-3.5 w-3.5" />
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-white/85">You</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 px-6 py-8">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Code2 className="h-4 w-4" />
            Sani Dev
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sani Dev. Jyväskylä, Finland.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
       <ScrollToTopButton />
    </>
  );
}