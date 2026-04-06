"use client";

import { Reveal } from "@/components/Reveal";
import { Camera, ArrowRight } from "lucide-react";
import Link from "next/link";

const photos = [
  { caption: "Court action at Hemingway Park", aspect: "aspect-[4/3]" },
  { caption: "Community tournament day", aspect: "aspect-square" },
  { caption: "Stevenson Park courts", aspect: "aspect-[3/4]" },
  { caption: "Open play session", aspect: "aspect-[4/3]" },
  { caption: "Junior players in action", aspect: "aspect-[3/4]" },
  { caption: "League championship match", aspect: "aspect-square" },
  { caption: "Community social event", aspect: "aspect-[4/3]" },
  { caption: "Dominguez Park aerial view", aspect: "aspect-[16/9]" },
  { caption: "Senior players group", aspect: "aspect-square" },
  { caption: "Tournament bracket day", aspect: "aspect-[4/3]" },
  { caption: "Evening play under lights", aspect: "aspect-[3/4]" },
  { caption: "Mixed doubles match", aspect: "aspect-square" },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative">
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
            <p className="text-lg text-muted mt-6 max-w-xl mx-auto">
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
                <div className={`${photo.aspect} bg-gradient-to-br from-surface to-card-bg flex items-center justify-center relative`}>
                  <div className="font-[family-name:var(--font-display)] text-6xl text-brand-green/5">
                    CP
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Camera size={24} className="text-brand-green" />
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
            <p className="text-muted mb-6">
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
