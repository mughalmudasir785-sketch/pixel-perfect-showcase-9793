import { PawPrint, CalendarHeart, ArrowRight, HeartHandshake } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import vetTeam from "@/assets/vet-team.jpg.asset.json";
import puppy from "@/assets/puppy.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

const paws = [
  { top: "14%", left: "6%", size: 34, delay: "0s", opacity: 0.16 },
  { top: "68%", left: "10%", size: 24, delay: "1.4s", opacity: 0.13 },
  { top: "22%", left: "88%", size: 28, delay: "0.7s", opacity: 0.14 },
  { top: "78%", left: "80%", size: 40, delay: "2.1s", opacity: 0.1 },
  { top: "45%", left: "48%", size: 20, delay: "1.1s", opacity: 0.08 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      style={{ background: "var(--gradient-cream)" }}
    >
      {/* soft organic shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--coral-soft) 45%, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -right-20 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--honey) 35%, transparent)" }}
      />
      {/* logo watermark */}
      <img
        src={logo.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 w-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
      />
      {paws.map((p, i) => (
        <PawPrint
          key={i}
          aria-hidden="true"
          className="float-slow pointer-events-none absolute text-cocoa"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow">
              <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
              Your Pet&apos;s Health. Our Passion.
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl leading-[1.08] text-cocoa sm:text-5xl lg:text-6xl">
              Compassionate Care for Your Best Friend
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Professional veterinary care with love, compassion and dedication for every pet.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#appointment" className="btn-base btn-coral">
                <CalendarHeart className="h-4 w-4" aria-hidden="true" />
                Book an Appointment
              </a>
              <a href="#services" className="btn-base btn-outline">
                Explore Our Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={330}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-3 text-center lg:mx-0 lg:text-left">
              {[
                ["Gentle", "handling"],
                ["Clean", "clinic rooms"],
                ["Caring", "follow-up"],
              ].map(([a, b]) => (
                <div key={a} className="surface-card px-3 py-4">
                  <dt className="font-display text-lg text-cocoa">{a}</dt>
                  <dd className="text-xs text-muted-foreground">{b}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="surface-card overflow-hidden rounded-[2.5rem] p-0">
              <img
                src={vetTeam.url}
                alt="Veterinarian and pet parent with a golden retriever and a ginger cat at P&P Animal Hospital"
                width={736}
                height={1104}
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
              />
            </div>
            <div className="surface-card absolute -bottom-6 -left-4 w-40 overflow-hidden rounded-3xl p-0 sm:-left-10 sm:w-48">
              <img
                src={puppy.url}
                alt="Happy golden retriever puppy in a basket"
                width={400}
                height={300}
                loading="lazy"
                className="h-28 w-full object-cover sm:h-32"
              />
            </div>
            <div className="glass-panel absolute -top-4 -right-2 flex items-center gap-2 rounded-full px-4 py-2 sm:-right-6">
              <PawPrint className="h-4 w-4 text-coral" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wide text-cocoa">
                Treated like family
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
