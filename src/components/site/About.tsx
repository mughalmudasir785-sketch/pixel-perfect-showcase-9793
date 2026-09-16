import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import cat from "@/assets/cat.jpg.asset.json";
import petsGroup from "@/assets/pets-group.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad relative isolate overflow-hidden">
      <img
        src={logo.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 w-[520px] -translate-y-1/2 opacity-[0.045]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 items-start gap-4">
            <div className="surface-card overflow-hidden rounded-[2rem] p-0">
              <img
                src={cat.url}
                alt="Fluffy ginger and white cat in a cosy home setting"
                width={736}
                height={981}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
              />
            </div>
            <div className="surface-card mt-8 overflow-hidden rounded-[2rem] p-0">
              <img
                src={petsGroup.url}
                alt="Dog, cat, rabbit, hamster and parrot together"
                width={736}
                height={1104}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">About P&amp;P Animal Hospital</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-tight text-cocoa sm:text-4xl">
              Where Every Pet Is Treated Like Family
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                P&amp;P Animal Hospital was built around a simple belief: pets deserve care that
                is as kind as it is professional. From the moment you walk in, our focus is your
                pet&apos;s comfort — quiet handling, patient examinations and honest conversations
                about what your companion needs.
              </p>
              <p>
                We care for dogs, cats and small companion animals across every stage of life,
                from first puppy and kitten visits to the gentle attention senior pets deserve.
                Our team takes the time to explain findings clearly, so you always feel confident
                about the next step.
              </p>
              <p>
                Health, comfort and wellbeing guide every decision we make — because behind every
                paw is a family who loves them.
              </p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <a href="#services" className="btn-base btn-outline mt-8">
              Learn More
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
