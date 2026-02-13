"use client";
import React, { useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SpotifyPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      <Navbar />
      {mounted && (
        <div className="fixed inset-0 z-0 scale-150">
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
              brightness={1.2}
              cAzimuthAngle={170}
              cDistance={4.4}
              cPolarAngle={70}
              cameraZoom={1}
              color1="#94ffd1"
              color2="#6bf5ff"
              color3="#ffffff"
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
              positionX={0}
              positionY={0.9}
              positionZ={-0.3}
              range="disabled"
              rangeEnd={40}
              rangeStart={0}
              reflection={0.1}
              rotationX={45}
              rotationY={0}
              rotationZ={0}
              shader="defaults"
              type="waterPlane"
              uAmplitude={0}
              uDensity={1.2}
              uFrequency={0}
              uSpeed={0.2}
              uStrength={3.4}
              uTime={0}
              wireframe={false}
            />
          </ShaderGradientCanvas>
        </div>
      )}

      <div className="relative z-10 w-full max-w-xl space-y-10">
        <h2 className="text-4xl font-serif italic text-white">
          Our Soundtrack.
        </h2>
        <div className="backdrop-blur-3xl bg-black/40 p-4 rounded-[2.5rem] border border-white/10">
          <iframe
            style={{ borderRadius: "24px" }}
            src="https://open.spotify.com/embed/playlist/1KsQWNYVw1RXsiyyfFDh6a?si=2a33223c33db44ca"
            width="100%"
            height="422"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
