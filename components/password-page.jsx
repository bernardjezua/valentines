"use client";

import React, { useState, useEffect } from "react";
// FIX: Use named import for useRouter
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// CRITICAL: Disable SSR for ShaderGradient components to fix mobile display
const ShaderGradientCanvas = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);
const ShaderGradient = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradient),
  { ssr: false }
);

export function PasswordPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
    setError(false);

    if (value === "022724") {
      router.push("/letter");
    } else if (value.length === 6) {
      setError(true);
      setTimeout(() => setCode(""), 1000);
    }
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black font-sans">
      {/* Background Layer: Use 100dvh for full mobile coverage */}
      <div className="fixed inset-0 z-0 h-[100dvh] w-screen pointer-events-none touch-none">
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-12 rounded-[3.5rem] text-center shadow-2xl">
          <h1 className="text-4xl font-serif italic text-white mb-4 leading-tight py-4">
            Will you be my valentine?
          </h1>
          <p className="text-white/40 mb-10 text-xs uppercase tracking-[0.3em]">
            Enter our special date if yes.
          </p>
          <input
            type="text"
            value={code}
            onChange={handleInputChange}
            placeholder="••••••"
            className={`w-full bg-black/40 border-2 rounded-2xl py-4 text-center text-4xl tracking-[0.4em] text-white outline-none transition-all ${
              error
                ? "border-red-500 text-red-400"
                : "border-white/10 focus:border-pink-500/50"
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
}
