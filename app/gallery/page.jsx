"use client";
import React, { useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const photos = Array.from({ length: 24 });

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      <Navbar />
      {mounted && (
        <div className="fixed inset-0 z-0 scale-125">
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
              brightness={1.5}
              cAzimuthAngle={250}
              cDistance={1.5}
              cPolarAngle={140}
              cameraZoom={12.5}
              color1="#809bd6"
              color2="#910aff"
              color3="#af38ff"
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
              reflection={0.5}
              rotationX={0}
              rotationY={0}
              rotationZ={140}
              shader="defaults"
              type="sphere"
              uAmplitude={7}
              uDensity={0.8}
              uFrequency={5.5}
              uSpeed={0.3}
              uStrength={0.4}
              uTime={0}
              wireframe={false}
            />
          </ShaderGradientCanvas>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-12 px-6">
        <h2 className="text-4xl font-serif italic text-white text-center mt-12 mb-12">
          Our Memoa.
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
          {photos.map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <img
                src={`/images/photo${i + 1}.jpg`}
                alt="Us"
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
