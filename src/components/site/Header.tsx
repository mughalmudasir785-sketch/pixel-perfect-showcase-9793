import { useEffect, useState } from "react";
import { Menu, X, CalendarHeart } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { clinic, navLinks } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3 md:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`glass-panel flex items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-500 md:px-5 ${
            scrolled ? "shadow-[var(--shadow-lift)]" : ""
          }`}
        >
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="P&P Animal Hospital logo"
              width={56}
              height={56}
              className="h-11 w-11 rounded-full object-cover md:h-14 md:w-14"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-base leading-tight font-semibold text-cocoa md:text-lg">
                {clinic.name}
              </span>
              <span className="hidden text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase sm:block">
                Veterinary Hospital
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-semibold text-cocoa/80 transition-colors hover:bg-secondary hover:text-cocoa"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#appointment" className="btn-base btn-coral hidden md:inline-flex">
              <CalendarHeart className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-cocoa transition-colors hover:bg-coral-soft lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-panel mt-2 rounded-3xl p-3 lg:hidden">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-cocoa transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="btn-base btn-coral mt-1 w-full"
              >
                <CalendarHeart className="h-4 w-4" aria-hidden="true" />
                Book an Appointment
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
