"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code2, MessageCircle, Calendar, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/layout/theme-toggle";

const navLinks = [
  { label: "Web design", href: "/services/web-design" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "My Story", href: "/tarina/", external: true },
];

const WHATSAPP_NUMBER = "358417146600";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3WU8Km4zrJwiTia90UjMW3C7FjQtTgmNNLLe2xt9vSQeD_Z6C2uP--Kf-TRjlalMV0EMsmPcKs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between rounded-full border border-border/40 bg-background/85 px-4 h-14 shadow-md shadow-black/[0.06] backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <Code2 className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            Sani Dev
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-1.5 md:flex">
            {/* **NEW** */}
            <ThemeToggle />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
              aria-label="Book a free call"
              title="Book a free call"
            >
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors hover:bg-[#25D366]/20"
              aria-label="Contact on WhatsApp"
              title="Contact on WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
            </a>

            <Link
              href="/login"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
              aria-label="Log in"
              title="Log in"
            >
              <UserCircle2 className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Button size="sm" className="ml-1 rounded-full px-5 font-bold" asChild>
              <Link href="/#pricing">Get started</Link>
            </Button>
          </div>

          <button
            className="p-1.5 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-border/40 bg-background/95 px-4 py-3 shadow-md backdrop-blur-md">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="mt-1 flex gap-2 border-t border-border/40 pt-2">
              {/* **NEW** */}
              <ThemeToggle />
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
                aria-label="Book a free call"
                title="Book a free call"
              >
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors hover:bg-[#25D366]/20"
                aria-label="Contact on WhatsApp"
                title="Contact on WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
              </a>

              <Link
                href="/login"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
                aria-label="Log in"
                title="Log in"
                onClick={() => setOpen(false)}
              >
                <UserCircle2 className="h-4 w-4 text-muted-foreground" />
              </Link>

              <Button size="sm" className="flex-1 rounded-full font-bold" asChild>
                <Link href="/#pricing" onClick={() => setOpen(false)}>
                  Get started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
