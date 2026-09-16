import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { Appointment } from "@/components/site/Appointment";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingContact } from "@/components/site/FloatingContact";

const title = "P&P Animal Hospital | Veterinary Care for Dogs, Cats & Pets";
const description =
  "P&P Animal Hospital offers compassionate veterinary care: consultations, vaccination, surgery, dental care, diagnostics, grooming and emergency pet care.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "P&P Animal Hospital, veterinary hospital, veterinarian, pet care, animal hospital, pet vaccination, pet grooming",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Team />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <Toaster position="top-center" richColors />
    </>
  );
}
