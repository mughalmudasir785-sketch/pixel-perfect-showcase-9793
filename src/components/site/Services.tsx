import {
  Stethoscope,
  HeartPulse,
  Syringe,
  Scissors,
  Microscope,
  Siren,
  Sparkles,
  ShieldCheck,
  Pill,
  Bone,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  "heart-pulse": HeartPulse,
  syringe: Syringe,
  scissors: Scissors,
  tooth: Bone,
  microscope: Microscope,
  siren: Siren,
  sparkles: Sparkles,
  shield: ShieldCheck,
  pill: Pill,
};

export function Services() {
  return (
    <section
      id="services"
      className="section-pad relative isolate overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--sand) 42%, var(--ivory)), var(--cream))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Our Services</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-tight text-cocoa sm:text-4xl">
              Complete Veterinary Care Under One Roof
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Everyday wellness, planned procedures and urgent concerns — handled with the same
              calm, careful attention.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Stethoscope;
            return (
              <Reveal key={s.title} delay={(i % 5) * 70}>
                <article className="surface-card surface-lift group h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-cocoa transition-colors duration-500 group-hover:bg-coral-soft">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base leading-snug text-cocoa">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <a
                    href="#appointment"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-coral transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
