"use client";

import { Reveal } from "@/components/Reveal";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const eventTypes = [
  { label: "Open Play", color: "bg-brand-green" },
  { label: "League", color: "bg-brand-blue" },
  { label: "Tournament", color: "bg-accent-gold" },
  { label: "Clinic", color: "bg-[#f97316]" },
  { label: "Social", color: "bg-[#a855f7]" },
];

const sampleEvents = [
  { day: 6, type: "Open Play", title: "Morning Open Play", color: "bg-brand-green" },
  { day: 6, type: "League", title: "Spring League", color: "bg-brand-blue" },
  { day: 10, type: "Clinic", title: "Beginner Clinic", color: "bg-[#f97316]" },
  { day: 13, type: "Open Play", title: "Saturday Open Play", color: "bg-brand-green" },
  { day: 15, type: "Tournament", title: "Carson Classic Qualifier", color: "bg-accent-gold" },
  { day: 20, type: "Open Play", title: "Evening Open Play", color: "bg-brand-green" },
  { day: 20, type: "Social", title: "Community Mixer", color: "bg-[#a855f7]" },
  { day: 27, type: "Open Play", title: "Saturday Open Play", color: "bg-brand-green" },
  { day: 27, type: "League", title: "Spring League Finals", color: "bg-brand-blue" },
];

// Generate calendar days for a sample month
function generateCalendarDays() {
  const days: (number | null)[] = [];
  const startDay = 0; // Sunday
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= 30; i++) days.push(i);
  while (days.length % 7 !== 0) days.push(null);
  return days;
}

export default function CalendarPage() {
  const calendarDays = generateCalendarDays();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
              Events
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl tracking-tight mt-3">
              COMMUNITY
              <br />
              <span className="text-brand-green text-glow">CALENDAR</span>
            </h1>
            <p className="text-lg text-muted mt-4 max-w-xl">
              Open play, leagues, tournaments, and community events
            </p>
          </Reveal>
        </div>
      </section>

      {/* Calendar + Sidebar */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Calendar grid */}
          <Reveal>
            <div className="rounded-lg border border-card-border bg-card-bg overflow-hidden">
              {/* Month header */}
              <div className="flex items-center justify-between p-5 border-b border-card-border">
                <button className="p-2 rounded hover:bg-surface transition-colors text-muted hover:text-foreground">
                  <ChevronLeft size={18} />
                </button>
                <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-wide">
                  APRIL 2026
                </h2>
                <button className="p-2 rounded hover:bg-surface transition-colors text-muted hover:text-foreground">
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 border-b border-card-border">
                {daysOfWeek.map((d) => (
                  <div
                    key={d}
                    className="p-3 text-center text-xs uppercase tracking-wider text-muted font-semibold"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Day cells */}
              <div className="grid grid-cols-7">
                {calendarDays.map((day, i) => {
                  const dayEvents = day
                    ? sampleEvents.filter((e) => e.day === day)
                    : [];
                  return (
                    <div
                      key={i}
                      className={`min-h-[90px] p-2 border-b border-r border-card-border ${
                        day ? "hover:bg-surface/50 cursor-pointer" : ""
                      } transition-colors`}
                    >
                      {day && (
                        <>
                          <div className={`text-sm mb-1.5 ${
                            dayEvents.length > 0 ? "text-foreground font-semibold" : "text-muted"
                          }`}>
                            {day}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event, j) => (
                              <div
                                key={j}
                                className="flex items-center gap-1.5 text-[10px] truncate"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${event.color}`} />
                                <span className="truncate text-muted">
                                  {event.title}
                                </span>
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-[10px] text-brand-green">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event type legend */}
            <Reveal direction="right">
              <div className="rounded-lg border border-card-border bg-card-bg p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide mb-4">
                  EVENT TYPES
                </h3>
                <div className="space-y-2.5">
                  {eventTypes.map((et) => (
                    <div key={et.label} className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${et.color}`} />
                      <span className="text-sm text-muted">{et.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Upcoming */}
            <Reveal direction="right" delay={0.1}>
              <div className="rounded-lg border border-card-border bg-card-bg p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide mb-4">
                  UPCOMING EVENTS
                </h3>
                <div className="space-y-3">
                  {sampleEvents.slice(0, 4).map((event, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded bg-surface border border-card-border hover:border-brand-green/20 transition-colors cursor-pointer"
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 ${event.color}`} />
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{event.title}</div>
                        <div className="text-xs text-muted">April {event.day}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* League CTA */}
            <Reveal direction="right" delay={0.2}>
              <div className="rounded-lg border border-brand-blue/20 bg-brand-blue/5 p-6">
                <h3 className="font-semibold mb-2">Join a League</h3>
                <p className="text-sm text-muted mb-4">
                  Register for Carson Pickleball leagues and organized play
                  through Rally Leagues.
                </p>
                <a
                  href="https://rallyleagues.com/pickleball-facilities/carson-pickleball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-blue text-white font-semibold rounded hover:bg-brand-blue/80 transition-all text-sm w-full justify-center"
                >
                  Register Now <ExternalLink size={13} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
