"use client";

import { Reveal } from "@/components/Reveal";
import { FloatingPickleballs } from "@/components/FloatingPickleballs";
import { MapPin, Clock, ArrowRight, CheckCircle, Info, Calendar, Briefcase } from "lucide-react";

const courts = [
  {
    name: "Hemingway Park",
    courtCount: 8,
    address: "700 E. Gardena Bl. Carson CA 90746",
    mapUrl: "https://maps.google.com/?q=700+E+Gardena+Blvd+Carson+CA+90746",
    embedQuery: "700+E+Gardena+Blvd+Carson+CA+90746",
    weekday: "Mon - Fri: 8 AM - 8:30 PM",
    weekend: "Sat - Sun: 8 AM - 4:30 PM",
    features: ["8 dedicated pickleball courts", "Free public access", "Lighted courts", "Parking available"],
    accent: "border-t-brand-green",
    badge: "bg-brand-green/10 text-brand-green",
  },
  {
    name: "Stevenson Park",
    courtCount: 4,
    address: "17400 Lysander Dr. Carson CA 90746",
    mapUrl: "https://maps.google.com/?q=17400+Lysander+Dr+Carson+CA+90746",
    embedQuery: "17400+Lysander+Dr+Carson+CA+90746",
    weekday: "Mon - Fri: 8 AM - 8:30 PM",
    weekend: "Sat - Sun: 8 AM - 4:30 PM",
    features: ["4 dedicated pickleball courts", "Free public access", "Restroom facilities", "Parking available"],
    accent: "border-t-brand-blue",
    badge: "bg-brand-blue/10 text-brand-blue",
  },
  {
    name: "Dominguez Park",
    courtCount: 4,
    address: "21330 S. Santa Fe Ave, Carson CA 90810",
    mapUrl: "https://maps.google.com/?q=21330+S+Santa+Fe+Ave+Carson+CA+90810",
    embedQuery: "21330+S+Santa+Fe+Ave+Carson+CA+90810",
    weekday: "Mon - Fri: 3 PM - 8:30 PM",
    weekend: "Sat - Sun: 8 AM - 4:30 PM",
    features: ["4 dedicated pickleball courts", "Free public access", "Afternoon/evening hours", "Parking available"],
    accent: "border-t-accent-gold",
    badge: "bg-accent-gold/10 text-accent-gold",
  },
  {
    name: "Dolphin Park",
    courtCount: 1,
    address: "21205 Water St. Carson CA 90745",
    mapUrl: "https://maps.google.com/?q=21205+Water+St+Carson+CA+90745",
    embedQuery: "21205+Water+St+Carson+CA+90745",
    weekday: "Mon - Fri: 8 AM - 8:30 PM",
    weekend: "Sat - Sun: 8 AM - 4:30 PM",
    features: ["1 pickleball court", "Free public access", "Open park setting", "Parking available"],
    accent: "border-t-[#a855f7]",
    badge: "bg-[#a855f7]/10 text-[#a855f7]",
  },
];

const infoCards = [
  { icon: CheckCircle, title: "Free to Play", desc: "All city park courts are free and open to the public during park hours." },
  { icon: Briefcase, title: "Bring Your Gear", desc: "Bring your own paddle and balls. Some open play sessions may have loaner equipment." },
  { icon: Calendar, title: "Check the Calendar", desc: "Some courts may have scheduled league or tournament play. Check our events calendar." },
];

export default function Courts() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <FloatingPickleballs variant="courts" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
              Find a Court
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl tracking-tight mt-3">
              FIND COURTS IN THE
              <br />
              <span className="text-brand-green text-glow">CITY OF CARSON</span>
            </h1>
            <p className="text-lg text-muted mt-4 max-w-xl">
              Carson offers multiple free public pickleball courts across{" "}
              {courts.length} parks. All courts are open to the public and free
              to use during park hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Court cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {courts.map((court, i) => (
            <Reveal key={court.name} delay={i * 0.08}>
              <div className={`rounded-lg border border-card-border ${court.accent} border-t-2 bg-card-bg overflow-hidden h-full`}>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
                      {court.name}
                    </h2>
                    <span className={`px-3 py-1 text-xs font-semibold rounded ${court.badge}`}>
                      {court.courtCount} Pickleball Court{court.courtCount > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-muted mb-2">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-brand-green/60" />
                    <span>{court.address}</span>
                  </div>

                  <a
                    href={court.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-brand-green hover:text-brand-green-dim transition-colors mb-6 ml-5"
                  >
                    Get Directions <ArrowRight size={12} />
                  </a>

                  {/* Hours */}
                  <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-wider text-muted mb-2 flex items-center gap-1.5">
                      <Clock size={12} /> Hours of Operation
                    </h3>
                    <div className="text-sm space-y-1">
                      <div>{court.weekday}</div>
                      <div>{court.weekend}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-wider text-muted mb-2">
                      Court Features
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {court.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-1.5 text-sm text-muted"
                        >
                          <CheckCircle size={12} className="text-brand-green/60 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="border-t border-card-border">
                  <iframe
                    src={`https://www.google.com/maps?q=${court.embedQuery}&output=embed`}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${court.name}`}
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Info cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {infoCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="rounded-lg border border-card-border bg-surface p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-brand-green/10 flex items-center justify-center shrink-0">
                  <card.icon size={18} className="text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-muted">{card.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
