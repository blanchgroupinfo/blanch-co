import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import retirement from "@/assets/retirement.jpg.asset.json";
import research from "@/assets/research.jpg.asset.json";
import news from "@/assets/news.jpg.asset.json";
import band from "@/assets/band.png.asset.json";
import art1 from "@/assets/art1.jpg.asset.json";
import art2 from "@/assets/art2.jpg.asset.json";
import art3 from "@/assets/art3.jpg.asset.json";
import event from "@/assets/event.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blanch & Co | Digital Private Bank & Sovereign Investment Trust" },
      {
        name: "description",
        content:
          "Blanch & Co is a leading global full Digital Financial Service, Digital Private Bank and Sovereign Investment Trust for individuals, families, corporations and institutions.",
      },
      {
        property: "og:title",
        content: "Blanch & Co | Digital Private Bank & Sovereign Investment Trust",
      },
      {
        property: "og:description",
        content:
          "Global digital financial services, digital private banking, asset management and sovereign investment trust solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CARDS = [
  {
    image: retirement.url,
    kicker: "Individuals & Families",
    title: "Digital Retirement",
    copy: "Planning for retirement is a lifelong process. We build strategies designed to protect income and grow digital wealth across generations.",
  },
  {
    image: research.url,
    kicker: "Corporations & Institutions",
    title: "Digital Research",
    copy: "Independent equity, fixed income and digital asset research delivering the insight institutions need to move with conviction.",
  },
  {
    image: news.url,
    kicker: "About Us",
    title: "News & Media",
    copy: "Press releases, market strategy, analyst appearances and thought leadership from across the Blanch Network.",
  },
];

const ARTICLES = [
  {
    image: art1.url,
    category: "Digital Asset Management",
    title: "Market Strategy",
    author: "Blanch & Co",
  },
  {
    image: art2.url,
    category: "Digital Wealth Management",
    title: "Graduating into Digital Financial Independence",
    author: "Blanch & Co",
  },
  {
    image: art3.url,
    category: "Digital Equities",
    title: "If You're Betting On A Rally, Bet On Tech",
    author: "Ari Wald",
  },
];

const STATS = [
  { value: "1,170", label: "Staff" },
  { value: "$48 Billion", label: "Assets Under Management" },
  { value: "1", label: "Digital Branch Office Across the Globe" },
];

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl text-primary-deep md:text-4xl">{title}</h2>
      <div className="mt-5 h-px w-20 bg-gold" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        <section id="what-we-do" className="py-20">
          <div className="container-page max-w-4xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              What We Do
            </p>
            <h2 className="text-3xl text-primary-deep md:text-4xl">
              Digital financial advice, built on trust
            </h2>
            <div className="mx-auto my-6 h-px w-20 bg-gold" />
            <p className="text-base leading-relaxed text-muted-foreground">
              Blanch &amp; Co's objective is to deliver digital financial advice and provide access
              to a wide range of digital financial services. Traditional and non-traditional digital
              investment products and services are the foundations of our digital financial
              institution. We utilize fin-technologies to increase portfolio performance, digital
              asset management, client net worth and shareholder returns.
            </p>
          </div>
        </section>

        <section id="individuals" className="pb-20">
          <div className="container-page grid gap-8 md:grid-cols-3">
            {CARDS.map((c) => (
              <article
                key={c.title}
                className="group border border-border bg-card transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {c.kicker}
                  </p>
                  <h3 className="mt-3 text-xl text-primary-deep">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                  <a
                    href="#advisor"
                    className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:text-primary-deep"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="advisor" className="border-y border-border bg-secondary py-20">
          <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl text-primary-deep">Find a Digital Financial Advisor</h2>
              <div className="my-5 h-px w-20 bg-gold" />
              <p className="text-base leading-relaxed text-muted-foreground">
                Your financial goals are unique. Blanch &amp; Co Digital Financial Advisors work
                with you to understand where you want to go and how to help you get there.
              </p>
            </div>
            <a
              href="#login"
              className="shrink-0 bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Search
            </a>
          </div>
        </section>

        <section
          id="asset-management"
          className="relative flex h-56 items-center bg-primary-deep bg-cover bg-center"
          style={{ backgroundImage: `url(${band.url})` }}
        >
          <div className="absolute inset-0 bg-primary-deep/70" />
          <div className="container-page relative">
            <h2 className="text-3xl text-primary-foreground md:text-4xl">
              Digital Insights &amp; Thought Leadership
            </h2>
            <div className="mt-5 h-px w-20 bg-gold" />
          </div>
        </section>

        <section id="insights" className="py-20">
          <div className="container-page">
            <SectionHeading eyebrow="Insights & Ideas" title="Latest from Blanch & Co" />
            <div className="grid gap-8 md:grid-cols-3">
              {ARTICLES.map((a) => (
                <article key={a.title} className="group">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {a.category}
                  </p>
                  <h3 className="mt-2 text-lg leading-snug text-primary-deep">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">By {a.author}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="institutions"
          className="relative flex h-80 items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${event.url})` }}
        >
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="container-page relative max-w-xl text-primary-foreground">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Latest News
            </p>
            <h2 className="text-3xl md:text-4xl">Digital Financial Security Summit</h2>
            <a
              href="#about"
              className="mt-7 inline-block border border-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              Learn More
            </a>
          </div>
        </section>

        <section id="about" className="bg-secondary py-20">
          <div className="container-page text-center">
            <SectionHeading title="Our Story in Numbers" />
            <div className="grid gap-10 md:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-5xl text-primary">{s.value}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="careers" className="py-20">
          <div className="container-page grid gap-10 md:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Careers" title="Forever Forward" />
              <p className="text-base leading-relaxed text-muted-foreground">
                From experienced hires to our Digital Private Banking Analyst Program and
                internships, careers at Blanch &amp; Co are built around a single idea: moving
                clients, markets and technology forward together.
              </p>
              <a
                href="#login"
                className="mt-7 inline-block bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                Explore Careers
              </a>
            </div>
            <div id="login" className="border border-border bg-card p-10">
              <h3 className="text-2xl text-primary-deep">Client Log In</h3>
              <div className="my-5 h-px w-20 bg-gold" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Access your Blanch &amp; Co digital private banking, trust and asset management
                accounts through the Blanch Network — a distributed ledger technology ecosystem for
                business-to-business digital asset management and trade.
              </p>
              <a
                href="#login"
                className="mt-6 inline-block border border-primary px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Log In
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
