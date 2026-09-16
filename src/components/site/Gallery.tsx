import puppy from "@/assets/puppy.jpg.asset.json";
import cat from "@/assets/cat.jpg.asset.json";
import grooming from "@/assets/grooming.jpg.asset.json";
import petsGroup from "@/assets/pets-group.jpg.asset.json";
import petNeeds from "@/assets/pet-needs.jpg.asset.json";
import groomingTips from "@/assets/grooming-tips.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

const shots = [
  { src: puppy.url, alt: "Golden retriever puppy wearing a floral bandana", span: "sm:col-span-2 sm:row-span-2", h: "h-64 sm:h-full" },
  { src: cat.url, alt: "Long-haired ginger and white cat standing on a soft rug", span: "", h: "h-56" },
  { src: grooming.url, alt: "Cat and dog enjoying a bubbly grooming session", span: "", h: "h-56" },
  { src: petsGroup.url, alt: "Dog, cat, rabbit, hamster and parrot posing together", span: "sm:col-span-2", h: "h-56" },
  { src: petNeeds.url, alt: "Pets with food bowls, grooming supplies and accessories", span: "sm:col-span-2", h: "h-56" },
  { src: groomingTips.url, alt: "Pet grooming tips poster with a dog and cat", span: "", h: "h-56" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Pet Care Moments</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-tight text-cocoa sm:text-4xl">
              Because Every Paw Deserves the Best Care
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal
              key={s.src}
              delay={(i % 4) * 80}
              className={`${s.span} overflow-hidden rounded-[2rem]`}
            >
              <figure className="surface-card surface-lift h-full overflow-hidden rounded-[2rem] p-0">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className={`${s.h} w-full object-cover transition-transform duration-700 ease-out hover:scale-110`}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
