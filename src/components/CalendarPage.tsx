"use client";

import { Reveal } from "@/components/Reveal";
import { ExternalLink, Info } from "lucide-react";

export function CalendarPage({ calendarId }: { calendarId: string }) {
  return (
    <>
      <section className="pt-32 pb-16 px-6 relative">
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">Events</span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl tracking-tight mt-3">
              COMMUNITY<br /><span className="text-brand-green text-glow">CALENDAR</span>
            </h1>
            <p className="text-lg text-foreground/80 mt-4 max-w-xl">
              Open play, leagues, tournaments, and community events. Synced live from our Google Calendar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px] gap-8">
          <Reveal>
            <div className="rounded-lg border border-card-border bg-card-bg overflow-hidden">
              <iframe
                src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=America%2FLos_Angeles&bgcolor=%23060a0e&showTitle=0&showNav=1&showDate=1&showCalendars=0&showTabs=1&showPrint=0&mode=MONTH`}
                style={{ border: 0 }} width="100%" height="650" className="w-full"
                title="Carson Pickleball Community Calendar" loading="lazy"
              />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal direction="right">
              <div className="rounded-lg border border-card-border bg-card-bg p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide mb-4">HOW IT WORKS</h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex gap-3">
                    <Info size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <p>This calendar syncs live with our Google Calendar. Events are updated in real-time by the Carson Pickleball team.</p>
                  </div>
                  <div className="flex gap-3">
                    <Info size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <p>Click any event to see details including location, time, and description.</p>
                  </div>
                  <div className="flex gap-3">
                    <Info size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <p>Use the arrows at the top to navigate between months. Switch between month, week, and agenda views.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="rounded-lg border border-brand-blue/20 bg-brand-blue/5 p-6">
                <h3 className="font-semibold mb-2">Join a League</h3>
                <p className="text-sm text-foreground/70 mb-4">Register for Carson Pickleball leagues and organized play through Rally Leagues.</p>
                <a href="https://rallyleagues.com/pickleball-facilities/carson-pickleball" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-blue text-white font-semibold rounded hover:bg-brand-blue/80 transition-all text-sm w-full justify-center">
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
