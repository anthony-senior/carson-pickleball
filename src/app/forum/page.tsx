"use client";

import { Reveal } from "@/components/Reveal";
import { MessageSquare, Users, Trophy, HelpCircle, Dumbbell, ArrowRight, Lock } from "lucide-react";

const categories = [
  { name: "General Discussion", icon: MessageSquare, threads: 24, color: "text-brand-green", desc: "Talk about anything pickleball" },
  { name: "Open Play", icon: Users, threads: 18, color: "text-brand-blue", desc: "Find and organize open play sessions" },
  { name: "Leagues & Tournaments", icon: Trophy, threads: 12, color: "text-accent-gold", desc: "League updates, scores, and tournament info" },
  { name: "Gear Talk", icon: Dumbbell, threads: 31, color: "text-[#a855f7]", desc: "Paddles, shoes, balls, and gear reviews" },
  { name: "Tips & Strategy", icon: HelpCircle, threads: 15, color: "text-[#f97316]", desc: "Improve your game with tips from the community" },
  { name: "Partner Finder", icon: Users, threads: 9, color: "text-[#06b6d4]", desc: "Find doubles partners and practice buddies" },
];

const recentThreads = [
  { title: "Best paddles for beginners in 2026?", author: "PicklePro22", replies: 14, category: "Gear Talk", time: "2 hours ago" },
  { title: "Saturday open play at Hemingway - who's in?", author: "CarsonLocal", replies: 8, category: "Open Play", time: "4 hours ago" },
  { title: "Spring league standings update", author: "TonySenior", replies: 21, category: "Leagues & Tournaments", time: "6 hours ago" },
  { title: "Looking for 3.5+ doubles partner", author: "SmashQueen", replies: 5, category: "Partner Finder", time: "8 hours ago" },
  { title: "Tips for improving my third shot drop?", author: "NewbieNate", replies: 11, category: "Tips & Strategy", time: "1 day ago" },
  { title: "Dominguez Park evening session review", author: "PaddleUp99", replies: 3, category: "Open Play", time: "1 day ago" },
];

export default function Forum() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
              Community
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl tracking-tight mt-3">
              CARSON PICKLEBALL
              <br />
              <span className="text-brand-green text-glow">FORUM</span>
            </h1>
            <p className="text-lg text-muted mt-4 max-w-xl">
              Connect with players, share tips, discuss tournaments, and be part
              of the community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Main - Categories */}
          <div>
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-wide mb-5">
                CATEGORIES
              </h2>
            </Reveal>
            <div className="space-y-3">
              {categories.map((cat, i) => (
                <Reveal key={cat.name} delay={i * 0.05}>
                  <div className="rounded-lg border border-card-border bg-card-bg p-5 flex items-center gap-5 hover:border-brand-green/30 transition-all cursor-pointer group">
                    <div className="w-11 h-11 rounded-lg bg-surface border border-card-border flex items-center justify-center shrink-0">
                      <cat.icon size={20} className={cat.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold group-hover:text-brand-green transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-muted">{cat.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-semibold">{cat.threads}</div>
                      <div className="text-xs text-muted">threads</div>
                    </div>
                    <ArrowRight size={16} className="text-muted group-hover:text-brand-green transition-colors shrink-0" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent threads */}
            <Reveal direction="right">
              <div className="rounded-lg border border-card-border bg-card-bg p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide mb-4">
                  RECENT DISCUSSIONS
                </h3>
                <div className="space-y-3">
                  {recentThreads.map((thread) => (
                    <div
                      key={thread.title}
                      className="pb-3 border-b border-card-border last:border-0 last:pb-0 cursor-pointer group"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-brand-green/60 mb-0.5">
                        {thread.category}
                      </div>
                      <div className="text-sm font-medium group-hover:text-brand-green transition-colors leading-snug">
                        {thread.title}
                      </div>
                      <div className="text-xs text-muted mt-1">
                        by {thread.author} &middot; {thread.replies} replies &middot; {thread.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Sign in CTA */}
            <Reveal direction="right" delay={0.1}>
              <div className="rounded-lg border border-brand-green/20 bg-brand-green/5 p-6 text-center">
                <Lock size={24} className="mx-auto text-brand-green mb-3" />
                <h3 className="font-semibold mb-2">Join the Discussion</h3>
                <p className="text-sm text-muted mb-4">
                  Sign in to post, reply, and earn badges.
                </p>
                <button className="w-full px-4 py-2.5 bg-brand-green text-background font-semibold rounded hover:bg-brand-green-dim transition-all text-sm">
                  Sign In / Register
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
