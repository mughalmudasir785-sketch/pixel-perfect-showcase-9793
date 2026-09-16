import { PawPrint } from "lucide-react";
import { team } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Team() {
  return (
    <section id="doctors" className="section-pad">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Our Team</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-tight text-cocoa sm:text-4xl">
              Meet Our Veterinary Team
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-base text-muted-foreground">
              Names, roles and photos below are editable placeholders — add the real team details
              whenever you&apos;re ready.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={`${m.name}-${i}`} delay={(i % 4) * 80}>
              <article className="surface-card surface-lift h-full overflow-hidden p-0 text-center">
                <div
                  className="grid h-52 place-items-center"
                  style={{ background: "var(--gradient-warm)" }}
                >
                  <PawPrint className="h-16 w-16 text-cocoa/45" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-cocoa">{m.name}</h3>
                  <p className="mt-1 text-xs font-bold tracking-[0.14em] text-coral uppercase">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
