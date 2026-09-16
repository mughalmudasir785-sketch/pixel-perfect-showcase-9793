import { MapPin, Phone, MessageCircle, Mail, Clock, Siren, CalendarHeart } from "lucide-react";
import { clinic } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const items = [
    { icon: MapPin, label: "Address", value: clinic.address },
    { icon: Phone, label: "Phone", value: clinic.phone },
    { icon: MessageCircle, label: "WhatsApp", value: clinic.whatsapp },
    { icon: Mail, label: "Email", value: clinic.email },
    { icon: Siren, label: "Emergency Contact", value: clinic.emergency },
  ];

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background:
          "linear-gradient(180deg, var(--cream), color-mix(in oklab, var(--sand) 45%, var(--ivory)))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-tight text-cocoa sm:text-4xl">
              Visit {clinic.name}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="surface-card h-full p-6 sm:p-8">
              <ul className="space-y-5">
                {items.map((it) => (
                  <li key={it.label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-secondary text-cocoa">
                      <it.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                        {it.label}
                      </span>
                      <span className="text-sm font-semibold text-cocoa">{it.value}</span>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-secondary text-cocoa">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                      Opening Hours
                    </span>
                    <dl className="mt-1 space-y-1">
                      {clinic.hours.map((h) => (
                        <div key={h.day} className="flex flex-wrap gap-x-2 text-sm">
                          <dt className="font-semibold text-cocoa">{h.day}</dt>
                          <dd className="text-muted-foreground">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                <a href={`tel:${clinic.phone}`} className="btn-base btn-coral">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a href={clinic.whatsappLink} className="btn-base btn-outline">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a href="#appointment" className="btn-base btn-outline">
                  <CalendarHeart className="h-4 w-4" aria-hidden="true" />
                  Book Appointment
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-card grid h-full min-h-[22rem] place-items-center overflow-hidden p-8 text-center">
              <div>
                <span
                  className="mx-auto grid h-14 w-14 place-items-center rounded-full text-cocoa"
                  style={{ background: "var(--gradient-warm)" }}
                >
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl text-cocoa">Find Us on the Map</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Add the clinic&apos;s Google Maps embed here once the address is confirmed, and
                  pet parents will be able to get directions in one tap.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
