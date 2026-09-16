import { MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/data/site";

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2">
      <a
        href={clinic.whatsappLink}
        aria-label="Chat on WhatsApp"
        className="glass-panel grid h-13 w-13 place-items-center rounded-full text-cocoa transition-transform duration-300 hover:-translate-y-1"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={`tel:${clinic.phone}`}
        aria-label="Call the clinic"
        className="btn-base btn-coral grid rounded-full p-0 transition-transform duration-300 hover:-translate-y-1"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
