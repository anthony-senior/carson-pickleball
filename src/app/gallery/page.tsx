"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { FloatingPickleballs } from "@/components/FloatingPickleballs";
import { Camera } from "lucide-react";
import Link from "next/link";

const photos = [
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cead669d4fda3c0271_AW8A5308.jpg", caption: "Court action at Hemingway Park", aspect: "aspect-[4/3]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cf9d3e43d48121326b_SEN00893.jpg", caption: "Community tournament day", aspect: "aspect-square" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d2309b6ec3d3149bf3_SEN07199.jpg", caption: "Stevenson Park courts", aspect: "aspect-[3/4]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d0c6e2d433c930b939_SEN01283.jpg", caption: "Open play session", aspect: "aspect-[4/3]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cdeaaaee27c935119f_20250517_133833-67a3.jpg", caption: "Junior players in action", aspect: "aspect-[3/4]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895dde353e22b23407b55_AW8A4124.jpg", caption: "League championship match", aspect: "aspect-square" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d5e4b5ed758209fde9_20240401_123205.jpg", caption: "Community social event", aspect: "aspect-[4/3]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895dc08ea536ccfbff6c6_AW8A4529.jpg", caption: "Dominguez Park aerial view", aspect: "aspect-[16/9]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d62980875c9562c5cc_20250210_121838.jpg", caption: "Senior players group", aspect: "aspect-square" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d765490afc9cd1ac9f_20250210_122807.jpg", caption: "Tournament bracket day", aspect: "aspect-[4/3]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d5d0c37b393096cf69_20250109_201510.jpg", caption: "Evening play under lights", aspect: "aspect-[3/4]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cde85d7cb359fece02_AM.jpg", caption: "Mixed doubles match", aspect: "aspect-square" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d5ed5629727913804f_20240701_190221.jpg", caption: "Summer open play", aspect: "aspect-[4/3]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d9e3aaa6245c468935_20250830_113307.jpg", caption: "Community gathering", aspect: "aspect-[3/4]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d9e78c6d01558ce427_20250628_140528.jpg", caption: "Saturday league play", aspect: "aspect-square" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d9ed97c3516309ced9_20250926_181048.jpg", caption: "Fall tournament", aspect: "aspect-[4/3]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895da63f2e1ff5deb4f4c_20251118_195434.jpg", caption: "Night session under lights", aspect: "aspect-[3/4]" },
  { src: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cceae491e22d1bc922_SEN03769.jpg", caption: "Players warming up", aspect: "aspect-square" },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <FloatingPickleballs variant="gallery" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
              Gallery
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-8xl tracking-tight mt-3 leading-[0.9]">
              MORE THAN COURTS.
              <br />
              <span className="text-brand-green text-glow">WE ARE COMMUNITY.</span>
            </h1>
            <p className="text-lg text-foreground/80 mt-6 max-w-xl mx-auto">
              Moments from the courts, tournaments, and community events that
              make Carson Pickleball special.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photo grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <Reveal key={photo.caption} delay={(i % 6) * 0.05}>
              <div className="break-inside-avoid group rounded-lg border border-card-border bg-card-bg overflow-hidden hover:border-brand-green/30 transition-all cursor-pointer">
                <div className={`${photo.aspect} relative overflow-hidden`}>
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Camera size={24} className="text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm text-muted group-hover:text-foreground transition-colors">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6 text-center">
        <Reveal>
          <div className="max-w-xl mx-auto rounded-lg border border-card-border bg-card-bg p-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-wide mb-3">
              SHARE YOUR PICKLEBALL MOMENTS
            </h2>
            <p className="text-foreground/70 mb-6">
              Join our community forum to share your photos and videos from the
              courts, tournaments, and events.
            </p>
            <Link
              href="/forum"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-background font-semibold rounded hover:bg-brand-green-dim transition-all"
            >
              <Camera size={16} />
              Share in the Forum
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
