"use client";

import React, { useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

// Helper to disable SSR for shader components to ensure stability
const ShaderGradientCanvasSafe = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);
const ShaderGradientSafe = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradient),
  { ssr: false }
);

export default function LoveLetterPage() {
  const [mounted, setMounted] = useState(false);
  const [revealedIndexes, setRevealedIndexes] = useState([]);

  const sections = [
    "Hello, baby! I made this short website again for Valentines since I wanted to upgrade it. I'm so happy to be your boyfriend, your lover, and #1 fan, and that I get to spend most of my days with you. My life has completely turned around the moment I met you.",
    "I'm sorry for times that we fight or have misunderstandings, I promise I'm trying to be better each and every day for you. If anything, I don't want to hear you cry or be sad, because it makes me guilty or sad too. You don't deserve to get hurt my little bb girl.",
    "I like to give you lots of gifts and pampering you makes me happy! You don't have to feel guilty for not giving bb, it's always the thought that counts. Hindi rin naman ito padamihan ng gifts hehe. I just want you to feel special, that's all.",
    "You've been super lovely to me ever since. I can't believe this is our 3rd Feb Fair together and we're nearing our 2nd anniversary. Of course, if this is forever then it's even better, right?",
    "I'll never ever get tired of you, I'll always stay where you are. Through every challenge and wins in life, you are the only place I ever want to be.",
    "I love the person I am when I'm with you. You inspire me to grow, to dream bigger, and to love myself more. Thank you for choosing me, every single day.",
    "With you, I've found my forever. Thank you for being the answer to every wish I've ever made. You're my favorite person, my safe place, my home. I love you so much my baby. I love you and cheers to more celebrations for both of us!",
  ];

  // Load persistence from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("myle_letter_revealed");
    if (saved) {
      try {
        setRevealedIndexes(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading progress", e);
      }
    }
  }, []);

  // Update persistence whenever a new card is opened
  const handleReveal = (index) => {
    if (!revealedIndexes.includes(index)) {
      const newRevealed = [...revealedIndexes, index];
      setRevealedIndexes(newRevealed);
      localStorage.setItem("myle_letter_revealed", JSON.stringify(newRevealed));
    }
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden selection:bg-pink-500/30">
      <Navbar />

      <div className="fixed inset-0 z-0 scale-125">
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <ShaderGradient
            animate="on"
            axesHelper="on"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1.1}
            cAzimuthAngle={180}
            cDistance={3.9}
            cPolarAngle={115}
            cameraZoom={1}
            color1="#5606ff"
            color2="#fe8989"
            color3="#000000"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1}
            positionX={-0.5}
            positionY={0.1}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={235}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1.1}
            uFrequency={5.5}
            uSpeed={0.1}
            uStrength={2.4}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-40 pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-serif italic text-white text-center mb-12 tracking-tighter leading-none py-4"
        >
          Happy Valentine's Day, <span className="text-red-600">Myle!</span>
        </motion.h1>

        <div className="space-y-4 md:space-y-8">
          {sections.map((text, i) => (
            <RevealCard
              key={i}
              text={text}
              index={i}
              isOpen={revealedIndexes.includes(i)}
              onOpen={() => handleReveal(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RevealCard({ text, index, isOpen, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onOpen}
      className={`relative cursor-pointer backdrop-blur-3xl bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.05] ${
        index % 2 !== 0 ? "md:ml-20" : "md:mr-20"
      }`}
    >
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0.4 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          >
            <p className="text-pink-300 text-lg md:text-2xl font-serif italic drop-shadow-sm">
              Click to reveal...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          filter: isOpen ? "blur(0px)" : "blur(12px)",
          y: isOpen ? 0 : 5,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-xl md:text-2xl text-white/90 font-light leading-snug tracking-tight relative z-10">
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
}

function NavCard({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-3xl text-center hover:bg-white/10 hover:border-pink-500/50 transition-all cursor-pointer group"
    >
      <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="text-white text-[10px] uppercase tracking-widest font-medium">
        {label}
      </span>
    </Link>
  );
}
