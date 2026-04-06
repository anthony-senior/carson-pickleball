"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Find a Court", href: "/courts" },
  { label: "Gallery", href: "/gallery" },
  { label: "Forum", href: "/forum" },
  { label: "Calendar", href: "/calendar" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-brand-green flex items-center justify-center">
            <span className="font-[family-name:var(--font-display)] text-background text-lg leading-none font-bold">
              CP
            </span>
          </div>
          <span className="font-[family-name:var(--font-display)] text-xl tracking-wider text-foreground group-hover:text-brand-green transition-colors">
            CARSON PICKLEBALL
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          <a
            href="https://rallyleagues.com/pickleball-facilities/carson-pickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-sm font-semibold bg-brand-green text-background rounded hover:bg-brand-green-dim transition-colors flex items-center gap-1.5"
          >
            Register for League
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-muted hover:text-foreground transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-card-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-muted hover:text-brand-green transition-colors border-b border-card-border last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://rallyleagues.com/pickleball-facilities/carson-pickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-3 text-sm font-semibold bg-brand-green text-background rounded text-center"
              >
                Register for League
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
