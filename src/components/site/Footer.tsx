import { Facebook, Instagram, Music2, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { clinic, navLinks } from "@/data/site";

const quickLinks = [...navLinks.slice(0, 5), { label: "Appointments", href: "#appointment" }, navLinks[5]!];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-cocoa text-ivory">
      <img
        src={logo.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 w-[420px] opacity-[0.07]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="P&P Animal Hospital logo"
              width={64}
              height={64}
              loading="lazy"
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="font-display text-lg">{clinic.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">{clinic.tagline}</p>
          <div className="mt-6 flex gap-2">
            {[
              { href: clinic.social.facebook, Icon: Facebook, label: "Facebook" },
              { href: clinic.social.instagram, Icon: Instagram, label: "Instagram" },
              { href: clinic.social.tiktok, Icon: Music2, label: "TikTok" },
              { href: clinic.whatsappLink, Icon: MessageCircle, label: "WhatsApp" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10 transition-colors hover:bg-ivory/25"
              >
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-base">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-ivory/75">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ivory">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base">Get in Touch</h2>
          <ul className="mt-4 space-y-2 text-sm text-ivory/75">
            <li>{clinic.address}</li>
            <li>{clinic.phone}</li>
            <li>{clinic.email}</li>
            <li>Emergency: {clinic.emergency}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-ivory/15 px-4 py-5 text-center text-xs text-ivory/65">
        © {clinic.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
