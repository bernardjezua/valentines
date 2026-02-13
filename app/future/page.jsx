"use client";
import React, { useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function FuturePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [items, setItems] = useState([
    { id: 1, text: "Graduate Together", checked: false },
    { id: 2, text: "Move in together", checked: false },
    { id: 3, text: "Get a decent job", checked: false },
    { id: 4, text: "Have pets!", checked: false },
    { id: 5, text: "Save up for emergencies!", checked: false },
  ]);

  const toggle = (id) =>
    setItems(
      items.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i))
    );

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-6">
      <Navbar />
      {mounted && (
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
              cAzimuthAngle={0}
              cDistance={7.1}
              cPolarAngle={140}
              cameraZoom={17.3}
              color1="#ffffff"
              color2="#ffbb00"
              color3="#0700ff"
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
              positionY={0}
              positionZ={0}
              range="disabled"
              rangeEnd={40}
              rangeStart={0}
              reflection={0.1}
              rotationX={0}
              rotationY={0}
              rotationZ={0}
              shader="defaults"
              type="sphere"
              uAmplitude={1.4}
              uDensity={1.1}
              uFrequency={5.5}
              uSpeed={0.1}
              uStrength={1}
              uTime={0}
              wireframe={false}
            />
          </ShaderGradientCanvas>
        </div>
      )}

      <div className="relative z-10 max-w-md w-full backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-12 rounded-[3rem]">
        <h2 className="text-3xl text-white font-serif italic mb-10 text-center">
          Our Bucket List.
        </h2>
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => toggle(item.id)}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div
                className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${
                  item.checked
                    ? "bg-pink-500 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    : "border-white/20"
                }`}
              >
                {item.checked && (
                  <span className="text-white text-xs font-bold">✓</span>
                )}
              </div>
              <span
                className={`text-xl transition-all ${
                  item.checked ? "text-white/40 line-through" : "text-white"
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
