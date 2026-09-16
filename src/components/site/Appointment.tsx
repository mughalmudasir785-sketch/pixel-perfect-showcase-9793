import { useState, type FormEvent } from "react";
import { CalendarHeart } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png.asset.json";
import groomingTips from "@/assets/grooming-tips.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

const field =
  "w-full rounded-2xl border border-border bg-ivory px-4 py-3 text-sm text-cocoa outline-none transition-shadow placeholder:text-muted-foreground focus:border-coral-soft focus:ring-4 focus:ring-ring/40";

export function Appointment() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Appointment request noted", {
      description: "Please also call the clinic to confirm your preferred slot.",
    });
    e.currentTarget.reset();
  }

  return (
    <section id="appointment" className="section-pad relative isolate overflow-hidden">
      <img
        src={groomingTips.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--ivory) 94%, transparent), color-mix(in oklab, var(--cream) 96%, transparent))",
          backdropFilter: "blur(6px)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-center lg:text-left">
          <Reveal>
            <img
              src={logo.url}
              alt="P&P Animal Hospital logo"
              width={110}
              height={110}
              loading="lazy"
              className="mx-auto h-24 w-24 rounded-full object-cover lg:mx-0"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-3xl leading-tight text-cocoa sm:text-4xl">
              Give Your Pet the Care They Deserve
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Schedule a visit with P&amp;P Animal Hospital today.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="surface-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-cocoa">Pet Parent Name</span>
                <input required name="ownerName" className={field} placeholder="Your full name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-cocoa">Phone Number</span>
                <input
                  required
                  type="tel"
                  name="phone"
                  className={field}
                  placeholder="Your contact number"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-cocoa">Pet Name</span>
                <input required name="petName" className={field} placeholder="Your pet's name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-cocoa">Pet Type</span>
                <select required name="petType" defaultValue="" className={field}>
                  <option value="" disabled>
                    Select pet type
                  </option>
                  {["Dog", "Cat", "Rabbit", "Bird", "Hamster", "Other"].map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-cocoa">Preferred Date</span>
                <input required type="date" name="date" className={field} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-cocoa">Preferred Time</span>
                <input required type="time" name="time" className={field} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-bold text-cocoa">Reason for Visit</span>
                <input
                  name="reason"
                  className={field}
                  placeholder="Checkup, vaccination, grooming…"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-bold text-cocoa">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  className={field}
                  placeholder="Anything else we should know about your pet?"
                />
              </label>
            </div>

            <button type="submit" className="btn-base btn-coral mt-6 w-full">
              <CalendarHeart className="h-4 w-4" aria-hidden="true" />
              Request an Appointment
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {sent
                ? "Thank you — your request has been noted. Please call the clinic to confirm."
                : "We'll confirm your slot by phone. For urgent concerns, please call us directly."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
