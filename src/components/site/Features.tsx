import { Stethoscope, ShieldCheck, HeartHandshake, PawPrint } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    icon: Stethoscope,
    title: "Experienced Veterinary Care",
    desc: "Careful examinations and clear explanations at every visit.",
  },
  {
    icon: ShieldCheck,
    title: "Modern & Safe Treatment",
    desc: "Clean rooms, careful handling and well-maintained equipment.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Pet Care",
    desc: "Patient, gentle attention for nervous and first-time patients.",
  },
  {
    icon: PawPrint,
    title: "Your Pet Comes First",
    desc: "Treatment plans shaped around your pet's comfort and needs.",
  },
];

export function Features() {
  return (
    <section className="relative -mt-8 pb-4 md:-mt-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 90}>
            <article className="surface-card surface-lift h-full p-6">
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl text-cocoa"
                style={{ background: "var(--gradient-warm)" }}
              >
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg text-cocoa">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
