"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { HeroVideoLoop } from "@/components/HeroVideoLoop";
import {
  MapPin,
  Users,
  Trophy,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Zap,
  Calendar,
  MessageSquare,
} from "lucide-react";

interface HomePageProps {
  data: {
    heroHeadline1: string;
    heroHeadline2: string;
    heroTagline: string;
    heroDescription: string;
    heroCtaPrimaryText: string;
    heroCtaPrimaryUrl: string;
    heroCtaSecondaryText: string;
    heroCtaSecondaryUrl: string;
    missionLabel: string;
    missionHeading: string;
    missionDescription: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaTagline: string;
  };
  stats: { value: string; label: string }[];
  events: { title: string; start: string; end: string; type: string; color: string }[];
}

const statIcons = [MapPin, Trophy, Users, Zap];

const courts = [
  {
    name: "Hemingway Park",
    courts: 8,
    address: "700 E. Gardena Bl. Carson CA 90746",
    weekday: "Mon - Fri 8 AM - 8:30 PM",
    weekend: "Sat - Sun 8 AM - 4:30 PM",
    mapUrl: "https://maps.google.com/?q=700+E+Gardena+Blvd+Carson+CA+90746",
    color: "from-brand-green/20 to-brand-green/5",
    accent: "bg-brand-green",
  },
  {
    name: "Stevenson Park",
    courts: 4,
    address: "17400 Lysander Dr. Carson CA 90746",
    weekday: "Mon - Fri 8 AM - 8:30 PM",
    weekend: "Sat - Sun 8 AM - 4:30 PM",
    mapUrl: "https://maps.google.com/?q=17400+Lysander+Dr+Carson+CA+90746",
    color: "from-brand-blue/20 to-brand-blue/5",
    accent: "bg-brand-blue",
  },
  {
    name: "Dominguez Park",
    courts: 4,
    address: "21330 S. Santa Fe Ave, Carson CA 90810",
    weekday: "Mon - Fri 3 PM - 8:30 PM",
    weekend: "Sat - Sun 8 AM - 4:30 PM",
    mapUrl: "https://maps.google.com/?q=21330+S+Santa+Fe+Ave+Carson+CA+90810",
    color: "from-accent-gold/20 to-accent-gold/5",
    accent: "bg-accent-gold",
  },
];

const forumThreads = [
  { title: "Best paddles for beginners?", author: "PicklePro22", replies: 14, category: "Gear Talk" },
  { title: "Hemingway Park Saturday open play", author: "CarsonLocal", replies: 8, category: "Open Play" },
  { title: "Looking for 3.5+ doubles partner", author: "SmashQueen", replies: 5, category: "Partner Finder" },
  { title: "Spring league sign-up details", author: "TonySenior", replies: 21, category: "Leagues" },
];

function formatEventDate(dateStr: string): string {
  if (!dateStr) return "";
  if (dateStr.includes("T")) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }
  return dateStr;
}

function formatEventEnd(endStr: string): string {
  if (!endStr) return "";
  if (endStr.includes("T")) {
    const d = new Date(endStr);
    return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }
  return endStr;
}

export function HomePage({ data, stats, events }: HomePageProps) {
  // Split the CTA heading around the word we want to glow
  // Expecting format like "READY TO PADDLE UP?" -- we highlight the core phrase
  const ctaParts = data.ctaHeading.match(/^(.*?)(PADDLE UP)(.*?)$/i);

  return (
    <>
      {/* === HERO === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background video */}
        <HeroVideoLoop />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Gradient fade to solid at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        {/* Decorative green line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="absolute left-8 md:left-16 top-24 bottom-24 w-px bg-gradient-to-b from-brand-green via-brand-green/50 to-transparent origin-top"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-[family-name:var(--font-display)] text-[clamp(4rem,12vw,11rem)] leading-[0.85] tracking-tight mb-2 text-left"
          >
            <span className="block" style={{ color: "#1a3cdb" }}>{data.heroHeadline1}</span>
            <span className="block text-white">{data.heroHeadline2}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-[0.3em] text-white mb-8"
          >
            {data.heroTagline.includes("VIBE") ? (
              <>
                {data.heroTagline.split("VIBE")[0]}
                <span className="text-brand-green text-glow-sm">VIBE</span>
                {data.heroTagline.split("VIBE")[1]}
              </>
            ) : data.heroTagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {data.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={data.heroCtaPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-brand-green text-background font-semibold rounded hover:bg-brand-green-dim transition-all hover:shadow-[0_0_30px_rgba(0,255,102,0.2)] flex items-center justify-center gap-2"
            >
              {data.heroCtaPrimaryText}
              <ExternalLink size={15} />
            </a>
            <Link
              href={data.heroCtaSecondaryUrl}
              className="px-8 py-3.5 border border-card-border text-foreground font-semibold rounded hover:border-brand-green/40 hover:text-brand-green transition-all flex items-center justify-center gap-2"
            >
              {data.heroCtaSecondaryText}
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

      </section>

      {/* === STATS BAR === */}
      <section className="relative -mt-2 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-card-border rounded-lg overflow-hidden border border-card-border">
            {stats.map((stat, i) => {
              const Icon = statIcons[i] || Zap;
              return (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="bg-card-bg p-6 text-center group hover:bg-surface transition-colors">
                    <Icon
                      size={18}
                      className="mx-auto mb-2 text-brand-green/60 group-hover:text-brand-green transition-colors"
                    />
                    <div className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground/80 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* === COURTS SECTION === */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
                  Find a Court
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-tight mt-2">
                  FIND COURTS IN THE CITY OF CARSON
                </h2>
              </div>
              <Link
                href="/courts"
                className="hidden md:flex items-center gap-1 text-sm text-muted hover:text-brand-green transition-colors"
              >
                View all court details <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {courts.map((court, i) => (
              <Reveal key={court.name} delay={i * 0.1}>
                <div className="group relative rounded-lg border border-card-border bg-card-bg overflow-hidden hover:border-brand-green/30 transition-all duration-300">
                  {/* Top accent bar */}
                  <div className={`h-1 ${court.accent}`} />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide">
                        {court.name}
                      </h3>
                      <span className="px-2.5 py-1 text-xs font-semibold bg-brand-green/10 text-brand-green rounded">
                        {court.courts} courts
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-foreground/90 mb-4">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-brand-green/60" />
                      <span>{court.address}</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-foreground/90 mb-6">
                      <Clock size={14} className="mt-0.5 shrink-0 text-brand-green/60" />
                      <div>
                        <div>{court.weekday}</div>
                        <div>{court.weekend}</div>
                      </div>
                    </div>

                    <a
                      href={court.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green hover:text-brand-green-dim transition-colors"
                    >
                      Get Directions <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Link
            href="/courts"
            className="md:hidden flex items-center justify-center gap-1 text-sm text-muted hover:text-brand-green transition-colors mt-6"
          >
            View all court details <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* === MISSION SECTION (Parallax) === */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Parallax background image */}
        <div
          className="absolute inset-0 -top-20 -bottom-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/mission-bg.jpg')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        {/* Green gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 via-transparent to-brand-green/5" />

        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
              {data.missionLabel}
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl tracking-tight mt-3 mb-6">
              {data.missionHeading.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
              {data.missionDescription}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded hover:border-brand-green/40 hover:text-brand-green transition-all text-sm font-semibold bg-background/30 backdrop-blur"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* === EVENTS + FORUM PREVIEW === */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <Reveal direction="left">
            <div className="rounded-lg border border-card-border bg-card-bg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
                    What&apos;s Coming Up
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide mt-1">
                    UPCOMING EVENTS
                  </h3>
                </div>
                <Link
                  href="/calendar"
                  className="text-sm text-muted hover:text-brand-green transition-colors"
                >
                  View all
                </Link>
              </div>

              <div className="space-y-3">
                {events.map((event) => {
                  const startDisplay = formatEventDate(event.start);
                  const endDisplay = formatEventEnd(event.end);
                  const timeStr = endDisplay ? `${startDisplay} - ${endDisplay}` : startDisplay;

                  return (
                    <div
                      key={event.title}
                      className="flex items-center gap-4 p-4 rounded bg-surface border border-card-border hover:border-brand-green/20 transition-colors group"
                    >
                      <div className="flex flex-col items-center min-w-[44px]">
                        <Calendar size={16} className="text-muted group-hover:text-brand-green transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`w-2 h-2 rounded-full ${event.color}`} />
                          <span className="text-[11px] uppercase tracking-wider text-muted">
                            {event.type}
                          </span>
                        </div>
                        <div className="text-sm font-medium truncate">{event.title}</div>
                        <div className="text-xs text-muted">{timeStr}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Forum Preview */}
          <Reveal direction="right">
            <div className="rounded-lg border border-card-border bg-card-bg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
                    Community
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide mt-1">
                    LATEST DISCUSSIONS
                  </h3>
                </div>
                <Link
                  href="/forum"
                  className="text-sm text-muted hover:text-brand-green transition-colors"
                >
                  View all
                </Link>
              </div>

              <div className="space-y-3">
                {forumThreads.map((thread) => (
                  <div
                    key={thread.title}
                    className="flex items-center gap-4 p-4 rounded bg-surface border border-card-border hover:border-brand-green/20 transition-colors group cursor-pointer"
                  >
                    <div className="flex flex-col items-center min-w-[44px]">
                      <MessageSquare size={16} className="text-muted group-hover:text-brand-green transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider text-brand-green/60 mb-0.5">
                        {thread.category}
                      </div>
                      <div className="text-sm font-medium truncate group-hover:text-brand-green transition-colors">
                        {thread.title}
                      </div>
                      <div className="text-xs text-muted">
                        by {thread.author} &middot; {thread.replies} replies
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === CTA BANNER === */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 via-transparent to-brand-blue/5" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl tracking-tight mb-4">
              {ctaParts ? (
                <>
                  {ctaParts[1]}<span className="text-brand-green text-glow">{ctaParts[2]}</span>{ctaParts[3]}
                </>
              ) : (
                data.ctaHeading
              )}
            </h2>
            <p className="text-lg text-foreground/80 mb-10 max-w-lg mx-auto">
              {data.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/forum"
                className="px-8 py-3.5 bg-brand-green text-background font-semibold rounded hover:bg-brand-green-dim transition-all hover:shadow-[0_0_30px_rgba(0,255,102,0.2)]"
              >
                Join the Community
              </Link>
              <a
                href="https://rallyleagues.com/pickleball-facilities/carson-pickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-brand-blue text-white font-semibold rounded hover:bg-brand-blue/80 transition-all flex items-center justify-center gap-2"
              >
                Register for League <ExternalLink size={14} />
              </a>
            </div>
            <p className="font-[family-name:var(--font-display)] text-3xl tracking-[0.2em] text-brand-green/40">
              {data.ctaTagline}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
