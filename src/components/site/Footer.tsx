import { Facebook, Twitter, Linkedin, Video } from "lucide-react";
import logo from "@/assets/blanch-logo.png.asset.json";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Our Company",
    links: ["Careers", "Contact Us", "International", "Investor Relations", "News & Media", "Site Map"],
  },
  {
    title: "For Individual Investors",
    links: [
      "What Are Your Goals",
      "How Digital Financial Advisors Support You",
      "Find A Digital Financial Advisor",
    ],
  },
  {
    title: "For Institutional Investors",
    links: [
      "Digital Equities",
      "Digital Fixed Income",
      "Digital Investment Banking",
      "Digital Private Banking & Public Finance",
    ],
  },
  {
    title: "Legal",
    links: [
      "Cookies Policy",
      "Disclosures",
      "Regulatory Notices",
      "Terms of Use",
      "Statement of Financial Condition",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="inline-block bg-background px-4 py-3">
            <img src={logo.url} alt="Blanch & Co" className="h-8 w-auto" />
          </div>
          <div className="mt-6 flex gap-4 text-primary-foreground/70">
            <a href="#social" aria-label="Facebook" className="hover:text-gold">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#social" aria-label="Twitter" className="hover:text-gold">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#social" aria-label="LinkedIn" className="hover:text-gold">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#social" aria-label="Vimeo" className="hover:text-gold">
              <Video className="h-4 w-4" />
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 border-b border-gold/50 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
              {col.title}
            </h3>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#footer"
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © 2018-{new Date().getFullYear()} Blanch &amp; Co, and Blanch Network, Inc.
            All Rights Reserved.
          </p>
          <p>Powered by Blanch Network</p>
        </div>
      </div>
    </footer>
  );
}
