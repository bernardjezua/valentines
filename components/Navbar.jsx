"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/letter", label: "Letter", icon: "💌" },
  { href: "/gallery", label: "Gallery", icon: "📸" },
  { href: "/spotify", label: "Playlist", icon: "🎵" },
  { href: "/future", label: "Future", icon: "✨" },
  { href: "/cat", label: "Cat", icon: "🐈‍⬛" },
];

export default function Navbar() {
  const pathname = usePathname();

  // Guard to prevent rendering if for some reason pathname is null
  if (!pathname) return null;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-lg">
      <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center justify-between shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group p-2"
            >
              <div className="flex flex-col items-center gap-1 transition-all duration-300">
                <span
                  className={`text-xl ${
                    isActive
                      ? "scale-110"
                      : "opacity-60 group-hover:opacity-100 group-hover:scale-110"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-medium ${
                    isActive
                      ? "text-pink-300"
                      : "text-white/40 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute -inset-2 bg-pink-500/20 blur-xl rounded-full -z-10"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
