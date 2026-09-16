import { PawPrint, Check } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { whyUs } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function WhyUs() {
  return (
    <section
      className="section-pad relative isolate overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--cream), color-mix(in oklab, var(--coral-soft) 18%, var(--ivory)))",
      }}
    >
      <img
        src={logo.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 w-[min(110vw,780px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
      />
      {[
        { top: "12%", left: "5%", s: 30 },
        { top: "72%", left: "9%", s: 22 },
        { top: "20%", left: "91%", s: 26 },
        { top: "80%", left: "86%", s: 34 },
      ].map((p, i) => (
        <PawPrint
          key={i}
          aria-hidden="true"
          className="float-slow pointer-events-none absolute text-cocoa opacity-[0.13]"
          style={{ top: p.top, left: p.left, width: p.s, height: p.s, animationDelay: `${i * 1.3}s` }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-tight text-cocoa sm:text-4xl">
              Why Pet Parents Choose P&amp;P
            </h2>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 3) * 80}>
              <div className="surface-card surface-lift flex h-full items-start gap-4 p-6">
                <span
                  className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full text-cocoa"
                  style={{ background: "var(--gradient-warm)" }}
                >
                  <Check className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base text-cocoa">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
