"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { FloatingPickleballs } from "@/components/FloatingPickleballs";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero with pickleball court SVG background */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Pickleball court lines as decorative background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg
            viewBox="0 0 880 400"
            className="w-[140%] max-w-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {/* Outer court */}
            <rect x="40" y="20" width="800" height="360" rx="4" />
            {/* Center line */}
            <line x1="440" y1="20" x2="440" y2="380" />
            {/* Non-volley zone (kitchen) lines */}
            <line x1="240" y1="20" x2="240" y2="380" strokeDasharray="8 4" />
            <line x1="640" y1="20" x2="640" y2="380" strokeDasharray="8 4" />
            {/* Center service lines */}
            <line x1="240" y1="200" x2="440" y2="200" />
            <line x1="440" y1="200" x2="640" y2="200" />
            {/* Net */}
            <line x1="440" y1="0" x2="440" y2="400" strokeWidth="3" className="text-brand-green" opacity="0.3" />
          </svg>
        </div>

        <FloatingPickleballs variant="about" />

        {/* Green accent line -- like a paddle swing trail */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/2 left-0 w-24 h-px bg-gradient-to-r from-brand-green/40 to-transparent origin-left hidden md:block"
        />

        <div className="relative max-w-4xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
              About Us
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-8xl tracking-tight mt-3 leading-[0.9]">
              NO PLACE LIKE
              <br />
              <span className="text-brand-green text-glow">CARSON PICKLEBALL</span>
            </h1>
            <p className="text-xl text-foreground/80 mt-6 max-w-2xl leading-relaxed">
              A community built on passion, inclusivity, and the love of the game.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wide community photo */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="rounded-lg overflow-hidden border border-card-border">
              <Image
                src="https://cdn.prod.website-files.com/6940950f26454356a111ceda/698e2ecb8e6091a7960f7dd4_DJI_20240210105513_0016_D-Edit.png"
                alt="Carson Pickleball community group photo"
                width={1600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg text-sm text-brand-green mb-6">
                The Story
              </span>
              <div className="space-y-5 text-foreground/85 leading-relaxed">
                <p>
                  Carson Pickleball was the vision of USAP Ambassador Tony
                  Senior working in cooperation with the City of Carson Parks
                  and Recreation, Public Works and council office. In 2021 he
                  observed that many surrounding cities were expanding their
                  pickleball offerings and Carson had not explored bringing the
                  sport to the local community yet.
                </p>
                <p>
                  After meeting and planning with city officials, Carson
                  Pickleball was born and the vision came to fruition. Fast
                  forward to 2026, Carson has many options for pickleball
                  including free city parks, pay to play private outdoor and a
                  membership based indoor / outdoor club.
                </p>
                <p>
                  We invite everyone to explore our offerings that include open
                  play, free and paid training, leagues, tournaments and
                  programming for juniors and seniors. Carson is the place to be
                  for pickleball...
                  <span className="text-brand-green font-semibold">
                    {" "}IT&apos;S A VIBE!
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-card-border">
                <Image
                  src="https://cdn.prod.website-files.com/6940950f26454356a111ceda/698e2eca898d38983c6677bd_P1010003-2.jpg"
                  alt="Carson Pickleball players vibin in Carson"
                  width={860}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Est badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-brand-green flex items-center justify-center">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-display)] text-xs text-background/70">EST.</div>
                  <div className="font-[family-name:var(--font-display)] text-xl text-background leading-none">2021</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy + Commitment */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <div className="rounded-lg border border-card-border bg-card-bg p-10 h-full">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 text-sm text-brand-green mb-6">
                The Philosophy
              </span>
              <p className="text-foreground/85 leading-relaxed text-lg">
                The philosophy in Carson is to foster an environment of
                inclusivity for all players of all levels. New players often find
                it intimidating to venture to a new venue and &quot;paddle up&quot;,
                therefore, we strive to welcome new players and help them
                navigate the waters of our growing community.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-lg border border-card-border bg-card-bg p-10 h-full">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-sm text-brand-blue mb-6">
                Our Commitment
              </span>
              <p className="text-foreground/85 leading-relaxed text-lg">
                The Carson Pickleball community continues to grow at a rapid rate
                with new courts being added by city and private entities. We are
                committed to continuing our mission of providing a safe, vibrant,
                competitive community for players of all levels and all ages.
                Pickleball is the fastest growing sport in America and we intend
                to be the trendsetters in offering as many pickleball options as
                possible. Carson is definitely the place to be for
                Pickleball...{" "}
                <span className="text-brand-green font-semibold">
                  IT&apos;S A VIBE!
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <Reveal>
          <p className="font-[family-name:var(--font-display)] text-4xl md:text-6xl tracking-[0.15em] text-brand-green/30 mb-10">
            PADDLES UP...0-0-2!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courts"
              className="px-8 py-3.5 bg-brand-green text-background font-semibold rounded hover:bg-brand-green-dim transition-all flex items-center justify-center gap-2"
            >
              Find a Court <ArrowRight size={15} />
            </Link>
            <a
              href="https://rallyleagues.com/pickleball-facilities/carson-pickleball"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-brand-blue text-white font-semibold rounded hover:bg-brand-blue/80 transition-all flex items-center justify-center gap-2"
            >
              Register for League <ExternalLink size={15} />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
