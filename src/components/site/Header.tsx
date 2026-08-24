import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import logo from "@/assets/blanch-logo.png.asset.json";
import nav1 from "@/assets/retirement.jpg.asset.json";
import nav2 from "@/assets/art3.jpg.asset.json";
import nav3 from "@/assets/research.jpg.asset.json";
import nav4 from "@/assets/news.jpg.asset.json";

type MenuGroup = { title: string; links: string[] };
type NavItem = {
  label: string;
  href: string;
  groups?: MenuGroup[];
  feature?: { image: string; title: string; copy: string; cta: string };
};

const NAV: NavItem[] = [
  {
    label: "Individuals & Families",
    href: "#individuals",
    groups: [
      {
        title: "What Are Your Goals?",
        links: [
          "Growing My Digital Wealth",
          "Engaging Family Office Services",
          "Planning For Digital Retirement",
          "Protecting My Digital Assets",
          "Transitioning My Digital Wealth",
        ],
      },
      {
        title: "Digital Financial Advisor Services",
        links: [
          "Investment Solutions",
          "Insurance Products & Services",
          "Institutional Services",
          "Mutual Fund Services",
          "Retirement Products & Services",
          "Trust Services",
        ],
      },
    ],
    feature: {
      image: nav1.url,
      title: "Find a Digital Financial Advisor",
      copy: "Our Digital Financial Advisors can advise you on all your Digital wealth management needs.",
      cta: "Search",
    },
  },
  {
    label: "Corporations & Institutions",
    href: "#institutions",
    groups: [
      {
        title: "Digital Equities",
        links: ["Corporate Access", "Events", "Digital Equity Research", "Digital Trade Finance"],
      },
      {
        title: "Digital Investment Banking",
        links: [
          "Global Reach",
          "Global Industry Expertise",
          "Investment Banking Services",
          "Transactions",
        ],
      },
      {
        title: "Private Banking & Public Finance",
        links: [
          "Cash Management",
          "Investment Solutions",
          "Retirement Products",
          "Selected Transactions",
        ],
      },
    ],
    feature: {
      image: nav2.url,
      title: "Conferences & Events",
      copy: "Blanch & Co. hosts multiple conferences a year covering many different industries.",
      cta: "Learn More",
    },
  },
  {
    label: "Digital Asset Management",
    href: "#asset-management",
    groups: [
      { title: "For Individuals", links: ["Investment Strategies", "Managed Portfolios"] },
      { title: "For Financial Advisors", links: ["Products & Services", "Resources & Support"] },
    ],
    feature: {
      image: nav3.url,
      title: "Market Strategy",
      copy: "Discuss the week in review.",
      cta: "Read More",
    },
  },
  {
    label: "About Us",
    href: "#about",
    groups: [
      {
        title: "Corporate Governance",
        links: ["Board of Directors", "Executive Management", "Philanthropy"],
      },
      {
        title: "News & Media",
        links: ["Analyst Appearances", "Insights & Ideas", "Market Strategy", "Press Releases"],
      },
      { title: "Global Offices", links: ["Asia", "Europe", "Middle East"] },
    ],
    feature: {
      image: nav4.url,
      title: "Contact Us",
      copy: "Have any questions? Click the link below to contact us directly.",
      cta: "Click Here",
    },
  },
  {
    label: "Careers",
    href: "#careers",
  },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-[0_1px_0_0_var(--color-border)]">
      <div className="bg-primary-deep text-xs">
        <div className="container-page flex h-9 items-center justify-end gap-6 text-primary-foreground/80">
          <a href="#advisor" className="hover:text-gold">
            Find an Advisor
          </a>
          <a href="#login" className="hover:text-gold">
            Client Log In
          </a>
          <button aria-label="Search" className="hover:text-gold">
            <Search className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="/" className="flex items-center">
          <img src={logo.url} alt="Blanch & Co — Forever Forward" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" onMouseLeave={() => setOpen(null)}>
          {NAV.map((item) => (
            <div key={item.label} onMouseEnter={() => setOpen(item.groups ? item.label : null)}>
              <a
                href={item.href}
                className="flex items-center gap-1 py-7 text-[0.8rem] font-semibold uppercase tracking-[0.09em] text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
                {item.groups && <ChevronDown className="h-3 w-3" />}
              </a>
            </div>
          ))}
        </nav>

        <button
          className="lg:hidden"
          aria-label="Menu"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {NAV.filter((n) => n.groups && n.label === open).map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => setOpen(item.label)}
          onMouseLeave={() => setOpen(null)}
          className="absolute inset-x-0 hidden border-t border-border bg-background shadow-[var(--shadow-card)] lg:block"
        >
          <div className="container-page grid grid-cols-4 gap-10 py-10">
            {item.groups!.map((g) => (
              <div key={g.title}>
                <h3 className="mb-4 border-b border-gold pb-2 text-sm font-semibold uppercase tracking-wide text-primary-deep">
                  {g.title}
                </h3>
                <ul className="space-y-2">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {item.feature && (
              <div className="border-l border-border pl-8">
                <img
                  src={item.feature.image}
                  alt={item.feature.title}
                  className="mb-4 h-28 w-full object-cover"
                  loading="lazy"
                />
                <h3 className="text-base font-semibold text-primary-deep">{item.feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.feature.copy}</p>
                <a
                  href={item.href}
                  className="mt-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary hover:text-primary-deep"
                >
                  {item.feature.cta} →
                </a>
              </div>
            )}
          </div>
        </div>
      ))}

      {mobile && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="container-page divide-y divide-border py-2">
            {NAV.map((item) => (
              <li key={item.label} className="py-3">
                <a
                  href={item.href}
                  onClick={() => setMobile(false)}
                  className="text-sm font-semibold uppercase tracking-wide text-foreground/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
