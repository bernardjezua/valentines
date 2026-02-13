"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Safe dynamic imports for the shader
const ShaderGradientCanvas = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);
const ShaderGradient = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradient),
  { ssr: false }
);

export default function CatPage() {
  const [pets, setPets] = useState(0);
  const [message, setMessage] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePet = () => {
    setPets((prev) => prev + 1);
    setMessage(true);
    // Increased timeout slightly for a better look at the animation
    setTimeout(() => setMessage(false), 1000);
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <Navbar />

      {/* Full-screen Shader Background */}
      <div className="fixed inset-0 z-0 h-[100dvh] w-screen pointer-events-none touch-none scale-110">
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1}
            cAzimuthAngle={180}
            cDistance={2.8}
            cPolarAngle={80}
            cameraZoom={9.1}
            color1="#606080"
            color2="#8d7dca"
            color3="#212121"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={50}
            rotationY={0}
            rotationZ={-60}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1.5}
            uFrequency={0}
            uSpeed={0.3}
            uStrength={1.5}
            uTime={8}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="relative z-10 text-center">
        {/* Floating "I LOVE YOU" Animation */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.5 }}
              animate={{ y: -190, opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <span className="text-5xl filter drop-shadow-[0_0_15px_rgba(255,182,193,0.8)]">
                ❤️
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Pixel Cat Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handlePet}
          className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer outline-none group"
        >
          <img
            src="/Pixel.webp"
            alt="Pixel Cat"
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_35px_rgba(255,192,203,0.5)] transition-all duration-300"
          />
        </motion.button>

        {/* Counter and Labels - Improved Visibility */}
        <div className="mt-8 space-y-2">
          <p className="text-white font-mono tracking-[0.3em] text-lg drop-shadow-md">
            PAT THE CAT
          </p>
          <p className="text-pink-200/80 font-mono text-sm uppercase tracking-widest">
            Total pats: <span className="text-white font-bold">{pets}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
