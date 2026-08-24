import { useEffect, useState } from "react";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

const SLIDES = [
  {
    image: hero1,
    eyebrow: "Global Digital Financial Services",
    title: "Digital Private Bank & Sovereign Investment Trust",
    copy: "Blanch & Co is a leading global full Digital Financial Service, Digital Private Bank, and Sovereign Investment Trust, focused on providing trusted services and tailored, sophisticated solutions for individuals, families, corporations and institutions.",
    cta: "Learn More",
  },
  {
    image: hero2,
    eyebrow: "Blanch & Co.",
    title: "Who We Are",
    copy: "For more than 20 years we have met the financial professional expertise and insight thus forming Blanch & Co to clients — helping them achieve their goals. We provide a full range of wealth management, digital financial securities, Digital Private Banking and Digital Investment Trust services to individuals, families, corporate executives, global governments, businesses and institutions.",
    cta: "Learn More",
  },
  {
    image: hero3,
    eyebrow: "Digital Wealth Management",
    title: "Digital Insurance and Annuities",
    copy: "Protecting you and your family against life's uncertainties. Insurance plays an important role in helping you prepare for the unexpected. It should also be an important part of your overall financial planning goals and objectives.",
    cta: "Learn More",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[38rem] overflow-hidden bg-primary-deep">
      {SLIDES.map((s, i) => (
        <div
          key={s.title}
          aria-hidden={i !== active}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="container-page relative flex h-full items-center">
        <div className="max-w-2xl text-primary-foreground">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {SLIDES[active].eyebrow}
          </p>
          <h1 className="text-4xl leading-tight md:text-5xl">{SLIDES[active].title}</h1>
          <div className="my-6 h-px w-24 bg-gold" />
          <p className="text-base leading-relaxed text-primary-foreground/85">
            {SLIDES[active].copy}
          </p>
          <a
            href="#what-we-do"
            className="mt-8 inline-block border border-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
          >
            {SLIDES[active].cta}
          </a>
        </div>
      </div>

      <div className="container-page absolute inset-x-0 bottom-8 flex gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1 w-14 transition-colors ${
              i === active ? "bg-gold" : "bg-primary-foreground/35"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
