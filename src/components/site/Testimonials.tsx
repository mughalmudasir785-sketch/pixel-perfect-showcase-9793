import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section
      className="section-pad"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--sand) 40%, var(--ivory)), var(--cream))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-tight text-cocoa sm:text-4xl">
              What Pet Parents Say
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <figure className="surface-card surface-lift flex h-full flex-col p-6">
                <Quote className="h-7 w-7 text-coral-soft" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <div className="mt-4 flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <figcaption className="mt-3 border-t border-border pt-3">
                  <span className="block text-sm font-bold text-cocoa">{t.author}</span>
                  <span className="text-xs text-muted-foreground">{t.pet}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
