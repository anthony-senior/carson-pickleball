"use client";

import Link from "next/link";
// Lucide removed brand icons; inline simple SVGs instead

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-sm bg-brand-green flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-background text-sm leading-none font-bold">
                  CP
                </span>
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg tracking-wider">
                CARSON PICKLEBALL
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Your source for all things pickleball in Carson CA and the
              immediate area. Building community through pickleball -- It&apos;s a
              Vibe!
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/carsonpickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-card-bg border border-card-border flex items-center justify-center text-muted hover:text-brand-green hover:border-brand-green/30 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/carsonpickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-card-bg border border-card-border flex items-center justify-center text-muted hover:text-brand-green hover:border-brand-green/30 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Find a Court", href: "/courts" },
                { label: "Gallery", href: "/gallery" },
                { label: "Community Forum", href: "/forum" },
                { label: "Events Calendar", href: "/calendar" },
                { label: "About Us", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-brand-green transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://rallyleagues.com/pickleball-facilities/carson-pickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-brand-green transition-colors w-fit"
              >
                Register for League &rarr;
              </a>
            </div>
          </div>

          {/* Email list */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wider mb-4">
              JOIN OUR EMAIL LIST
            </h3>
            <p className="text-sm text-muted mb-4">
              Get Carson Pickleball news, event updates, and community info
              delivered to your inbox.
            </p>
            <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-2.5 rounded bg-card-bg border border-card-border text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-brand-green/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="px-3 py-2.5 rounded bg-card-bg border border-card-border text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-brand-green/50 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-sm font-semibold bg-brand-green text-background rounded hover:bg-brand-green-dim transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Carson Pickleball. All rights
            reserved.
          </p>
          <p className="font-[family-name:var(--font-display)] text-sm tracking-widest text-brand-green/60">
            PADDLES UP...0-0-2!
          </p>
        </div>
      </div>
    </footer>
  );
}
